import React, { useEffect, useState, ReactNode, useRef } from "react";
import { Device, Call } from "@twilio/voice-sdk";

import { CallContext } from "../CallContext";
import { useUser } from "../../user/hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addConversationReference, updateConversation } from "../../../store/conversations/actions";
import { selectQueueConversation } from "../../../store/conversations/slice";
import BackgroundAudioProcessor from "../../../libs/audio";

import { CurrentDeviceToCall } from "../types";
import { CONVERSATION_CHANNEL, Obj, USER_STATE } from "../../../types";
import { CallDTO, ConversationDTO } from "../../../store/types";
import { COMM_STATE } from "../../communication/types";

type CallProviderProps = {
  workerStatus: COMM_STATE
  setWorkerStatus: (status: COMM_STATE, channel?: CONVERSATION_CHANNEL) => void
  children: ReactNode
}

export const CallProvider = ({ workerStatus, setWorkerStatus, children }: CallProviderProps) => {
  const queueConversations: ConversationDTO[] = useAppSelector(selectQueueConversation);
  const dispatch = useAppDispatch();

  const { twilioToken, user } = useUser();

  const [currentConversationCall, setCurrentConversationCall] = useState<CurrentDeviceToCall | null>(null);

  const [connection, setConnection] = useState<Call | string | null>(null);
  const [userState, setUserState] = useState(USER_STATE.OFFLINE);

  const device = useRef<Device | null>(null);

  const processor = new BackgroundAudioProcessor();

  const options: Obj = {
    logLevel: 1,
    codecPreferences: ['opus', 'pcmu'],
    fakeLocalDTMF: true,
    enableRingingState: true,
    debug: true, // TO-DO: se for dev
    allowIncomingWhileBusy: true,
  }

  const forwardCall = async (conn: Call) => {
    const currentDate = (Date.now()).toString();

    const id = queueConversations.length;

    const connectToken = conn?.connectToken;

    if (connectToken == undefined) {
      return
    }

    const forwardDevice: Device = new Device(twilioToken as string, options as any);

    await forwardDevice?.audio?.addProcessor(processor);

    const com: CallDTO = {
      id: id,
      device: forwardDevice,
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
      console.log('reject');
      setConnection(call);

      setUserState((prev: USER_STATE) => {
        setWorkerStatus(COMM_STATE.READY);

        return USER_STATE.READY;
      });
    });

    call.on('cancel', () => { 
      console.log('cancel');
      setConnection(call);

      setUserState((prev: USER_STATE) => {
        setWorkerStatus(COMM_STATE.READY);

        return USER_STATE.READY;
      });
    });

    call.on('accept', () => {
      console.log('accept');
      setConnection(call);
      setUserState(USER_STATE.ON_CALL);
   
      setWorkerStatus(COMM_STATE.BUSY, CONVERSATION_CHANNEL.CALL);
    });

    call.on('reconnected', () => { 
      console.log('reconnected');
    });

    call.on('reconnecting', (error: any) => { 
      console.log('reconnecting');
    });

    call.on('mute', (isMuted: boolean, call: Call) => { 
      console.log('mute');
    });
  
    call.on('disconnect', () => {
      console.log('disconnect');
      const cleanResourcers = async () => {
        await currentDevice?.audio?.removeProcessor(processor);
        currentDevice?.destroy();
        setCurrentConversationCall(null); // TO-DO: Verificar se esta é a abordagem correta
      }
      
      setConnection(null);

      setUserState((prev: USER_STATE) => {
        setWorkerStatus(COMM_STATE.READY);

        return USER_STATE.READY;
      });
      
      cleanResourcers();
    });

    call.on('error', (error: any) => { 
      console.log(error);
    });
  };

  const handleIndexChange = (index: string | number) => { 
    if (workerStatus !== COMM_STATE.BUSY) {
      // @ts-ignore
      const found: CallDTO | undefined = queueConversations.find((item: ConversationDTO) => item?.id == index);

      if (found != undefined) {
        dispatch(updateConversation(index)); 
        
        const comm: CurrentDeviceToCall = {
          currentConversation: found?.conversation,
          device: found?.device,
          connectToken: found?.connectToken,
        };

        setCurrentConversationCall(comm);

        setAcceptedCall();
      }
    }
  };

  useEffect(() => {
    if (twilioToken == undefined) {
      return
    }

    if (user) {
      device.current = new Device(twilioToken, options) as Device;
    
      device.current?.register();

      /*device.current.addListener('connect', (device: any) => {
        console.log("Connect event listener added .....");
        return device;
      });*/

      device.current?.on('ready', () => {
        console.log('ready');
        setUserState((prev: USER_STATE) => {
          if (prev === USER_STATE.ON_CALL) {
            setWorkerStatus(COMM_STATE.READY);
          }

          return USER_STATE.READY;
        });
      });

      device.current?.on('registered', () => {
        console.log("Agent registered");
        setUserState((prev: USER_STATE) => {
          if (prev === USER_STATE.ON_CALL) {
            setWorkerStatus(COMM_STATE.READY);
          }

          return USER_STATE.READY;
        });
      });

      device.current?.on('connect', (conn: Call) => {
        console.log("Connect event");
        setConnection(conn);

        // TESTAR ESTAR ABORDAGEM, TALVEZ O MAIS APROPRIADO SEJA ADOTAR A PROPSTA UTILIZADA EM PHONE
        setUserState((prev: USER_STATE) => {
          if (prev === USER_STATE.ON_CALL) {
            setWorkerStatus(COMM_STATE.READY); // VOLTAR
          }

          return USER_STATE.ON_CALL;
        });
      });

      device.current?.on('disconnect', () => {
        console.log("Disconnect event");
        setConnection(null);

        setUserState((prev: USER_STATE) => {
          if (prev === USER_STATE.ON_CALL) {
            setWorkerStatus(COMM_STATE.READY);
          }

          return USER_STATE.READY;
        });
      });

      device.current?.on('incoming', (conn: Call) => {
        console.log('incoming');
        setConnection(conn);

        setUserState((prev: USER_STATE) => {
          setWorkerStatus(COMM_STATE.WAITING);

          return USER_STATE.INCOMING;
        });

        forwardCall(conn);

        conn?.on('error', (error: any) => { 
          console.log(error);
        });
        /*conn.on('reject', () => {
        });

        conn.on('accept', () => {
        });*/
      });

      device.current?.on('error', (error: any) => {
        console.log("Error event detected: ", error);
        setConnection(null);
        setUserState(USER_STATE.ERROR);
      });
    }

    return () => {
      device.current?.destroy();
      setConnection(null);
      setUserState(USER_STATE.OFFLINE);
    }
  }, [user]);

  return (
    <CallContext.Provider
      value={{
        userState,
        setUserState,
        handleIndexChange,
        options
      }}
    >
      {children}
    </CallContext.Provider>
  );
}
