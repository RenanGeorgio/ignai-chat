import React, { useEffect, useState, ReactNode, useRef } from "react";

import { QueueContext } from "../CallContext";
import { useUser } from "../../user/hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addConversationReference, updateConversation } from "../../../store/conversations/actions";
import { selectQueueConversation } from "../../../store/conversations/slice";
import { postCall } from "../../../controllers/call";

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
  const [userState, setUserState] = useState(USER_STATE.OFFLINE);

  const eventSource = useRef<any>(undefined);

  const setAcceptedCall = async () => {
    if (currentConversationCall == undefined) {
      return
    }

    setUserState(USER_STATE.ON_CALL);
    setWorkerStatus(COMM_STATE.BUSY, CONVERSATION_CHANNEL.CALL);
    
    try {
      // enviar From no body e a queue como query param
      const response = await postCall("dequeue-incoming", currentConversationCall);

      if (response) {
        console.log(response);
        // Se neste momento nao estiver mais em ligação reverter os estados dos operadores
        //setUserState(USER_STATE.ON_CALL);
        //setWorkerStatus(COMM_STATE.BUSY, CONVERSATION_CHANNEL.CALL);    
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const forwardEnqueueCall = (data: Obj) => {
    const currentDate = (Date.now()).toString();

    const id = queueConversations.length;

    const com: EnqueueDTO = {
      id: id,
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
          currentConversation: found?.conversation
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

    try {
      eventSource.current = new EventSource(`${process.env.REACT_APP_CALL_API}/events?userId=${user._id}`);

      if (eventSource.current) {
        eventSource.current.onmessage = (event: any) => {
          const data = JSON.parse(event.data);
          console.log('New event received:', data);

          if (data) {
            forwardEnqueueCall(data?.data);
          }
        };

        eventSource.current.onerror = (err: any) => {
          console.error("EventSource failed:", err);
        };
      }
    } catch (err: any) {
      throw new Error(err);
    }

    return () => {
      eventSource.current?.close();
      eventSource.current?.destroy();
      setUserState(USER_STATE.OFFLINE);
    }
  }, [user]);

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