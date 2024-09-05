import React, { useEffect, useState, ReactNode, useRef } from "react";
import { Device, Call } from "@twilio/voice-sdk";

import { CallContext } from "../CallContext";
import { useUser } from "../../user/hooks";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addConversationReference, updateConversation } from "@store/conversations/actions";
import { selectQueueConversation } from "@store/conversations/slice";
import { CallState, CurrentDeviceToCall, ServicesPerformed } from "../types";
import { USER_STATE } from "@types";
import { ConversationDTO } from "@store/types";
import BackgroundAudioProcessor from "@libs/audio";

type CallProviderProps = {
  children: ReactNode
}

export const CallProvider = ({ children }: CallProviderProps) => {
  const queueConversations: ConversationDTO[] = useAppSelector(selectQueueConversation);
  const dispatch = useAppDispatch();

  const [servicesPerformed, setServicesPerformed] = useState<ServicesPerformed[]>([]);
  const [currentConversation, setCurrentConversation] = useState<CurrentDeviceToCall | null>(null);

  const [currentIndex, setCurrentIndex] = useState<string| number>('');
  const [userState, setUserState] = useState(USER_STATE.OFFLINE);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [connection, setConnection] = useState<any>(null);

  const [currentState, setCurrentState] = useState<CallState>({
    identity: "",
    status: null,
    ready: false,
  });

  const options = {
    logLevel: 1,
    codecPreferences: ['opus', 'pcmu'],
    fakeLocalDTMF: true,
    enableRingingState: true,
    debug: true,
    //edge: "ashburn",
    //allowIncomingWhileBusy: true,
  }

  const device = useRef<Device | null>(null);
  const processor = new BackgroundAudioProcessor();
  // Add the processor
  //await device.audio.addProcessor(processor);
  // Or remove it later
  // await device.audio.removeProcessor(processor);

  const { twilioToken, user } = useUser();

  const forwardCall = async (connection: Call) => {
    const currentDate = (Date.now()).toString();

    const id = queueConversations.length;

    const connectToken = connection.connectToken;
    const device = new Device(twilioToken, options);

    const com: ConversationDTO = {
      id: id,
      device: device,
      connectToken: connectToken,
      conversation: {
        queueId: id,
        callData: connection,
        updatedAt: currentDate,
        createdAt: currentDate,
      },
      label: {
        emoji: 'phone',
        id: id,
        startTime: currentDate,
        status: 'on',
        waitTime: undefined,
      },
    };

    dispatch(addConversationReference(com));
  }

  const setAcceptedCall = async () => {
    const currentDevice = currentConversation?.device;
    const connectToken = currentConversation?.connectToken;

    const call = await currentDevice.connect({ connectToken });

    call.on('reject', () => {
      updateUserState(USER_STATE.READY, null);
    });

    call.on('cancel', () => { })

    call.on('accept', () => {
      updateUserState(USER_STATE.ON_CALL, call);
    });

    call.on('reconnected', () => { })

    call.on('reconnecting', (error: any) => { })

    call.on('mute', (isMuted: boolean, call: Call) => { })
  
    call.on('disconnect', () => {
      updateUserState(USER_STATE.READY, call);
      currentDevice.destroy();
      setCurrentConversation(null); // TO-DO: Verificar se esta é a abordagem correta
    });
  };

  const handleIndexChange = (index: string | number) => {
    setCurrentIndex(index);

    const found = queueConversations.find((item: ConversationDTO) => item.id == index);
    dispatch(updateConversation(index));
    
    const comm = {
      currentConversation: found?.conversation,
      device: found?.device,
      connectToken: found?.connectToken,
    };

    setCurrentConversation(comm);

    setAcceptedCall();
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
      device.current = new Device(twilioToken, options);
    
      device.current.register();

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

      device.current.on('error', (error: any) => {
        console.log(error);
        setUserState(USER_STATE.ERROR);
      });

      device.current.on('registered', () => {
        console.log("Agent registered");
        setUserState(USER_STATE.READY);
      });

      device.current.on('connect', (connection: any) => {
        console.log("Connect event");
        setConnection(connection);
        setUserState(USER_STATE.ON_CALL);

        const connectState = {
          identity: currentState.identity,
          status: connection.status(),
          ready: true
        }

        setCurrentState(connectState);
      });

      device.current.on('disconnect', (connection: any) => {
        setUserState(USER_STATE.READY);
        setConnection(null);

        const disconnectState = {
          identity: currentState.identity,
          status: connection.status(),
          ready: true
        }

        setCurrentState(disconnectState);
      });

      device.current.on('incoming', (connection: Call) => {
        updateUserState(USER_STATE.INCOMING, connection);

        forwardCall(connection);

        connection.on('error', (error: any) => { });

        /*connection.on('reject', () => {
          updateUserState(USER_STATE.READY, null);
        });

        connection.on('accept', () => {
          updateUserState(USER_STATE.ON_CALL, connection);
        });*/
      });
    }

    return () => {
      device.current.destroy();
      setUserState(USER_STATE.OFFLINE);
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