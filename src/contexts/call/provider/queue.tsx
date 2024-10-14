import React, { useEffect, useState, ReactNode, useRef } from "react";
import { Device, Call } from "@twilio/voice-sdk";

import { QueueContext } from "../CallContext";
import { useUser } from "../../user/hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addConversationReference, updateConversation } from "../../../store/conversations/actions";
import { selectQueueConversation } from "../../../store/conversations/slice";
import { postCall } from "../../../controllers/call";
import BackgroundAudioProcessor from "../../../libs/audio";

import { DequeueCurrentDeviceToCall } from "../types";
import { CONVERSATION_CHANNEL, Obj, USER_STATE } from "../../../types";
import { ConversationDTO, EnqueueDTO } from "../../../store/types";
import { COMM_STATE } from "../../communication/types";

type QueueProviderProps = {
  workerStatus: COMM_STATE
  setWorkerStatus: (status: COMM_STATE, channel?: CONVERSATION_CHANNEL) => void
  children: ReactNode
}

export const QueueProvider = ({ workerStatus, setWorkerStatus, children }: QueueProviderProps) => {
  const queueConversations: ConversationDTO[] = useAppSelector(selectQueueConversation);
  const dispatch = useAppDispatch();

  const { twilioToken, user } = useUser();

  const [currentConversationCall, setCurrentConversationCall] = useState<DequeueCurrentDeviceToCall | null>(null);

  const [connection, setConnection] = useState<Call | string | null>(null);
  const [userState, setUserState] = useState(USER_STATE.OFFLINE);

  const eventSource = useRef<any>(undefined);

  const processor = new BackgroundAudioProcessor();

  const setAcceptedCall = async () => {
    if (currentConversationCall == undefined) {
      return
    }

    setUserState(USER_STATE.ON_CALL);
    setWorkerStatus(COMM_STATE.BUSY, CONVERSATION_CHANNEL.CALL);
    
    try {
      const response = await postCall("dequeue", currentConversationCall);

      if (response) {
        
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const forwardEnqueueCall = (data: Obj) => {
    const currentDate = (Date.now()).toString();

    const id = queueConversations.length;

    const forwardDevice: Device = new Device(twilioToken as string, options as any);

    const com: EnqueueDTO = {
      id: id,
      device: forwardDevice,
      conversation: {
        queueId: id,
        data: data,
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

  const handleIndexChange = (index: string | number) => { 
    if (workerStatus !== COMM_STATE.BUSY) {
      // @ts-ignore
      const found: EnqueueDTO | undefined = queueConversations.find((item: ConversationDTO) => item?.id == index);

      if (found != undefined) {
        dispatch(updateConversation(index)); 
        
        const comm: DequeueCurrentDeviceToCall = {
          currentConversation: found?.conversation,
          device: found?.device
        };

        setCurrentConversationCall(comm);

        setAcceptedCall();
      }
    }
  };

  useEffect(() => {
    if ((twilioToken == undefined) || (user == undefined)) {
      return
    }
  
    eventSource.current = new EventSource('http://localhost:3000/events');

    eventSource.current?.onmessage((event: any) => {
      const data = JSON.parse(event.data);
      console.log('New event received:', data);

      if (data) {
        forwardEnqueueCall(data?.data);
      }
    });

    return () => {
      eventSource.current?.destroy();
      setConnection(null);
      setUserState(USER_STATE.OFFLINE);
    }
  }, [twilioToken]);

  return (
    <QueueContext.Provider
      value={{
        userState,
        setUserState,
        handleIndexChange
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}
