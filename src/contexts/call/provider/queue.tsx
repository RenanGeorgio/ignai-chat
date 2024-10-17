import React, { useEffect, useState, ReactNode, useRef } from "react";

import { QueueContext } from "../CallContext";
import { useUser } from "../../user/hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addConversationReference, updateConversation } from "../../../store/conversations/actions";
import { selectQueueConversation } from "../../../store/conversations/slice";
import { dequeueCall, NotyfyDequeueEvent } from "../../../controllers/call";

import { DequeueCurrentDeviceToCall } from "../types";
import { CONVERSATION_CHANNEL, NotifyEnqueue, USER_STATE } from "../../../types";
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
      const value: NotifyEnqueue = currentConversationCall?.currentConversation?.data;

      const notyfy: NotyfyDequeueEvent = {
        agentName: value.agentName,
        company: value.company,
        From: value.data.From,
        To: value.data.To,
        Caller: value.data.Caller,
        position: value.data.QueuePosition,
      }

      const response = await dequeueCall(notyfy, value.queue);

      if (response) {
        console.log(response);

        setUserState(USER_STATE.READY);
        setWorkerStatus(COMM_STATE.READY);
      }
    } catch (error: any) {
      setUserState(USER_STATE.ERROR);
      setWorkerStatus(COMM_STATE.READY);

      throw new Error(error);
    }
  };

  const forwardEnqueueCall = (data: NotifyEnqueue) => {
    console.log("queue parte 4")
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
        waitTime: data.data?.QueueTime,
      },
    };
    console.log("queue parte 5")

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
    console.log("queue parte 1")
    if ((twilioToken == undefined) || (user == undefined)) {
      return
    }

    try {
      console.log("queue parte 2")
      eventSource.current = new EventSource(`${process.env.REACT_APP_CALL_API}/events?userId=${user._id}&company=${user.companyId}`);

      if (eventSource.current) {
        console.log("queue parte 3")
        eventSource.current.onmessage = (event: any) => {
          console.log('event:', event);
          const receivedEventData = JSON.parse(event.data);
          console.log('New event received:', receivedEventData);
          const parsedEventData = JSON.parse(receivedEventData.data);

          console.log('Parsed event data:', parsedEventData);

          const newEvent = {
            ...receivedEventData, data: parsedEventData
          }
          console.log('FowardedEvent:', newEvent);

          if (newEvent) {
            forwardEnqueueCall(newEvent);
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
  }, [user, twilioToken]);

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