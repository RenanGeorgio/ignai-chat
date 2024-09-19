import React, { useEffect, useState, ReactNode, useRef } from "react";
import { Device, Call } from "@twilio/voice-sdk";

import { CallContext } from "../CallContext";
import { useUser } from "../../user/hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addConversationReference, updateConversation } from "../../../store/conversations/actions";
import { selectQueueConversation } from "../../../store/conversations/slice";
import BackgroundAudioProcessor from "../../../libs/audio";

import { CallState, CurrentDeviceToCall, ServicesPerformed } from "../types";
import { ConsumersQueue, CONVERSATION_CHANNEL, Obj, USER_STATE } from "../../../types";
import { ConversationDTO } from "../../../store/types";

type CallProviderProps = {
  children: ReactNode
}

const options: Obj = {
  logLevel: 1,
  codecPreferences: ['opus', 'pcmu'],
  fakeLocalDTMF: true,
  enableRingingState: true,
  debug: true, // TO-DO: se for dev
  allowIncomingWhileBusy: true,
}

export const CallProvider = ({ children }: CallProviderProps) => {
  const queueConversations: ConversationDTO[] = useAppSelector(selectQueueConversation);
  const dispatch = useAppDispatch();

  const [servicesPerformed, setServicesPerformed] = useState<ServicesPerformed[]>([]); // TO-DO: mudar para useQuery direto no componente
  const [currentConversationCall, setCurrentConversationCall] = useState<CurrentDeviceToCall | null>(null);

  const [userState, setUserState] = useState(USER_STATE.OFFLINE);
  const [connection, setConnection] = useState<Call | string | null>(null);
  const [currentState, setCurrentState] = useState<CallState>({
    identity: "",
    status: null,
    ready: false,
  });

  const device = useRef<Device | null>(null);

  const processor = new BackgroundAudioProcessor();
  const { twilioToken, user } = useUser();

  const forwardCall = async (conn: Call) => {
    const currentDate = (Date.now()).toString();

    const id = queueConversations.length;

    const connectToken = conn?.connectToken;

    if (connectToken == undefined) {
      return
    }

    const device: Device = new Device(twilioToken as string, options as any);

    await device?.audio?.addProcessor(processor);

    const com: ConversationDTO = {
      id: id,
      device: device,
      connectToken: connectToken,
      conversation: {
        queueId: id,
        callData: conn,
        updatedAt: currentDate,
        createdAt: currentDate,
      },
      label: {
        emoji: CONVERSATION_CHANNEL.CALL,
        id: id,
        startTime: currentDate,
        status: 'on',
        waitTime: undefined,
      },
    };

    // @ts-ignore
    dispatch(addConversationReference(com));
  }

  const setAcceptedCall = async () => {
    if (currentConversationCall == undefined) {
      return
    }
    
    const currentDevice = currentConversationCall?.device as Device;
    const connectToken = currentConversationCall?.connectToken as string;

    const call: Call = await currentDevice?.connect({ connectToken });

    call.on('reject', () => {
      updateUserState(USER_STATE.READY, call);
    });

    call.on('cancel', () => { 
      updateUserState(USER_STATE.READY, call);
    });

    call.on('accept', () => {
      updateUserState(USER_STATE.ON_CALL, call);
    });

    call.on('reconnected', () => { })

    call.on('reconnecting', (error: any) => { })

    call.on('mute', (isMuted: boolean, call: Call) => { })
  
    call.on('disconnect', () => {
      const cleanResourcers = async () => {
        await currentDevice?.audio?.removeProcessor(processor);
        currentDevice?.destroy();
        setCurrentConversationCall(null); // TO-DO: Verificar se esta é a abordagem correta
      }
      
      updateUserState(USER_STATE.READY, null);
      
      cleanResourcers();
    });

    call.on('error', (error: any) => { });
  };

  const handleIndexChange = (index: string | number) => { 
    const found: ConversationDTO | undefined = queueConversations.find((item: ConversationDTO) => item?.id == index);

    if (found != undefined) {
      // @ts-ignore
      dispatch(updateConversation(index)); 
      
      const comm: CurrentDeviceToCall = {
        currentConversation: found?.conversation as ConsumersQueue,
        device: found?.device,
        connectToken: found?.connectToken,
      };

      setCurrentConversationCall(comm);

      setAcceptedCall();
    }
  };

  const updateUserState = (stateType: any, conn: any) => {
    setUserState(stateType);
    setConnection(conn);

    let st = null;

    if (conn != null) {
      st = conn.status();
    }
  
    const incomingState = {
      identity: currentState.identity,
      status: st,
      ready: true
    }

    setCurrentState(incomingState);
  }

  useEffect(() => {
    if (twilioToken == null) {
      return
    }

    if (user) {
      device.current = new Device(twilioToken, options) as Device;
    
      device.current?.register();

      /*device.current.addListener('connect', (device: any) => {
        console.log("Connect event listener added .....");
        return device;
      });*/

      device.current.on('ready', () => {
        setUserState(USER_STATE.READY);

        const readyState = {
          identity: currentState.identity,
          status: "device ready",
          ready: true
        }

        setCurrentState(readyState);
      });

      device.current.on('registered', () => {
        console.log("Agent registered");
        updateUserState(USER_STATE.READY, connection);
      });

      device.current.on('connect', (conn: Call) => {
        console.log("Connect event");
        updateUserState(USER_STATE.ON_CALL, conn);
      });

      device.current.on('disconnect', () => {
        console.log("Disconnect event");
        updateUserState(USER_STATE.READY, null);
      });

      device.current.on('incoming', (conn: Call) => {
        updateUserState(USER_STATE.INCOMING, conn);

        forwardCall(conn);

        conn.on('error', (error: any) => { });
        /*conn.on('reject', () => {
          updateUserState(USER_STATE.READY, null);
        });

        conn.on('accept', () => {
          updateUserState(USER_STATE.ON_CALL, conn);
        });*/
      });

      device.current.on('error', (error: any) => {
        console.log("Error event detected: ", error);
        updateUserState(USER_STATE.ERROR, null);
      });
    }

    return () => {
      device.current?.destroy();
      updateUserState(USER_STATE.OFFLINE, null);
    }
  }, [user]);

  return (
    <CallContext.Provider
      value={{
        servicesPerformed,
        userState,
        handleIndexChange
      }}
    >
      {children}
    </CallContext.Provider>
  );
}
