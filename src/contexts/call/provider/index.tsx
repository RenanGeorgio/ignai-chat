import React, { useCallback, useEffect, useState, ReactNode, useRef } from "react";
import { Device, Call } from "@twilio/voice-sdk";

import { CallContext } from "../CallContext";
import { getCall } from "@controllers/call";
import { useUser } from "@contexts/user/hooks";
import { Chat, Message, USER_STATE, CallState, ConsumersQueue, ServicesPerformed } from "../types";

type CallProviderProps = {
  children: ReactNode
}

export const CallProvider = ({ children }: CallProviderProps) => {
  const [servicesPerformed, setServicesPerformed] = useState<ServicesPerformed[]>([]);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState<boolean>(false);
  const [userChatsError, setUserChatsError] = useState<string | null>(null);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [newMessage, setNewMessage] = useState<Message | null>(null);
  const [consumersQueue, setconsumersQueue] = useState<ConsumersQueue[]>([]);
  const [userState, setUserState] = useState(USER_STATE.OFFLINE);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [connection, setConnection] = useState<any>(null);
  const [currentState, setCurrentState] = useState<CallState>({
    identity: "",
    status: null,
    ready: false,
  });

  const device = useRef<Device | null>(null);

  const { twilioToken, user } = useUser();

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

  const updateCurrentChat = useCallback((chat: Chat) => {
    setCurrentChat(chat);
  }, []);

  useEffect(() => {
    if (twilioToken == null) {
      return
    }

    device.current = new Device(twilioToken, {
      logLevel: 1,
      codecPreferences: ['opus', 'pcmu'],
      fakeLocalDTMF: true,
      enableRingingState: true,
      debug: true,
      //edge: "ashburn",
    });

    return () => {
      device.current.destroy();
      setUserState(USER_STATE.OFFLINE);
    }
  }, [twilioToken]);

  useEffect(() => {
    if (!device?.current) {
      return;
    }

    device.current.register();

    device.current.addListener('connect', (device: any) => {
      console.log("Connect event listener added .....");
      return device;
    });

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

      const queue = consumersQueue;
      const currentDate = (Date.now()).toString();

      const queueState = {
        queueId: queue.lenght(),
        callData: connection,
        updatedAt: currentDate,
        createdAt: currentDate,
      }

      queue.push(queueState);
      setconsumersQueue(queue);

      connection.on('reject', () => {
        updateUserState(USER_STATE.READY, null);
      });

      //connection.on('accept', () => {
      //});
    });
  }, [device.current]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?.companyId) {
        setIsUserChatsLoading(true);

        const response = await getCall(`chat/${user.companyId}`);
        
        if (!response.ok) {
          return setUserChatsError('error');
        }

        const data: ServicesPerformed[] = await response.json();

        setServicesPerformed(data);
      }
    }

    getUserChats();
  },[]);

  return (
    <CallContext.Provider
      value={{
        servicesPerformed,
        isUserChatsLoading,
        userChatsError,
        updateCurrentChat,
        currentChat,
        messages,
        consumersQueue
      }}
    >
      {children}
    </CallContext.Provider>
  );
}