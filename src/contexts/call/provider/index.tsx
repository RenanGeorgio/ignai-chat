import React, { useCallback, useEffect, useState, ReactNode, useRef } from "react";
import { Device, Call } from "@twilio/voice-sdk";

import { CallContext } from "../CallContext";
import { getChat, postChat } from "@controllers/chat";
import { useUser } from "@contexts/user/hooks";
import compareArrays from "@helpers/compareArrays";
import { Chat, ChatClient, Message, OnlineUser, ChatStatus, USER_STATE, CallState, ConsumersQueue, ServicesPerformed } from "../types";

type ChatProviderProps = {
  children: ReactNode
}

/**
 * Get a {@link Location}'s query parameters.
 * @param {Location} location
 * @returns {Map<string, Array<string>>} queryParameters
 */
function getQueryParameters(location) {
  return (location.search.split('?')[1] || '').split('&').reduce((queryParameters, keyValuePair) => {
    var [key, value] = keyValuePair.split('=');
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    queryParameters.set(key, (queryParameters.get(key) || []).concat([value]));
    return queryParameters;
  }, new Map());
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [servicesPerformed, setServicesPerformed] = useState<ServicesPerformed[]>([]);
  const [potentialChats, setPotentialChats] = useState<ChatClient[] | null>(null);

  const [isUserChatsLoading, setIsUserChatsLoading] = useState<boolean>(false);
  const [userChatsError, setUserChatsError] = useState<string | null>(null);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [newMessage, setNewMessage] = useState<Message | null>(null);
  const [consumersQueue, setconsumersQueue] = useState<ConsumersQueue[]>([]);

  const device = useRef<Device | null>(null);

  const [userState, setUserState] = useState(USER_STATE.OFFLINE);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [connection, setConnection] = useState<any>(null);
  const [currentState, setCurrentState] = useState<CallState>({
    identity: "",
    status: null,
    ready: false,
  });

  const { user } = useUser();

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

  // INICIALIZAÇÃO
  useEffect(() => {
    device.current = new Device(token, {
      logLevel: 1,
      codecPreferences: ['opus', 'pcmu'],
      fakeLocalDTMF: true,
      enableRingingState: true,
      debug: true,
      //edge: "ashburn",
    });

    return () => {
      device.current.destroy();
      //setDevice(undefined);
      setUserState(USER_STATE.OFFLINE);
    }
  }, [user]);

  // FILA DE CUSTOMERS ONLINES AGUARDANDO
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

  // FILA DE CUSTOMERS ONLINES AGUARDANDO
  useEffect(() => {
    if (device?.current === null) {
      return
    }

    device.current.emit('addNewUser', { userId: user?.companyId, platform: 'typebot' });

    device.current.on('consumersQueue', (users: OnlineUser[]) => {
      setconsumersQueue(users);
    });

    return () => {
      device.current.off('consumersQueue');
    }
  }, [device.current, user?.companyId]);

  useEffect(() => {
    if (!device?.current) {
      return
    }
    
    const recipientId = currentChat?.members?.find((id: string) => id !== user?.companyId);

    if (!recipientId) {
      return
    }

    console.log("send message event");
    device.current.emit('sendMessage', { ...newMessage, recipientId });
    setNewMessage(null);
  }, [newMessage, device.current]);

  useEffect(() => {
    if (!device?.current) {
      return
    }

    device.current.on('getMessage', (res: Message) => {
      if (currentChat?._id !== res.chatId) {
        return
      }

      setMessages((prev: any) => [...(prev || []), res]);
    });

    return () => {
      device.current.off('getMessage');
    }
  }, [device.current, currentChat]);

  useEffect(() => {
    if (device?.current === null) {
      return
    }

    device.current.on('newUserChat', (client: Chat) => {
      if (servicesPerformed != undefined) {
        const isChatCreated = servicesPerformed?.some((chat: Chat) =>
          compareArrays(chat?.members, client?.members) &&
          client.status === chat.status
        );

        if (isChatCreated) {
          return
        }
      }

      setServicesPerformed((prev: any) => [...(prev || []), client]);
    });

    return () => {
      device.current.off('newUserChat');
    }
  }, [device.current, servicesPerformed]);

  useEffect(() => {
    if (!servicesPerformed) {
      return
    }

    const getClients = async () => {
      const response = await getChat('chat/clients');

      if (!response.ok) {
        const value = JSON.stringify(response?.body);

        return setUserChatsError(value);
      }

      const data: ChatClient[] | Chat[] = await response.json();

      const pChats = data?.filter((client) => {
        let isChatCreated = false;

        if (!(user?._id === client?._id)) {
          return false
        }

        if (servicesPerformed) {
          isChatCreated = servicesPerformed?.some((chat: any) => {
            const members_: string[] = chat.members;

            return members_?.includes(client._id) && chat.status === ChatStatus.ACTIVE;
          });
        }

        return !isChatCreated
      });
      
      setPotentialChats(pChats);
    }

    getClients();
  }, [user, servicesPerformed]);

  // PEGA TODOS OS CHATS PARA UMA DETERMINADA COMPANIA
  useEffect(() => {
    const getUserChats = async () => {
      if (user?.companyId) {
        setIsUserChatsLoading(true);

        const response = await getChat(`chat/${user.companyId}`);

        if (!response.ok) {
          return setUserChatsError('error');
        }

        const data: Chat[] = await response.json();

        setServicesPerformed(data);
      }
    }

    getUserChats();
  }, [user, consumersQueue]);

  useEffect(() => {
    const getMessages = async () => {
      setIsMessagesLoading(true);
      setMessageError(null);
      if (currentChat) {
        const response = await getChat(`chat/message/${currentChat._id}`);

        setIsMessagesLoading(false);

        const data: Message[] = await response.json();

        if (!response.ok && 'message' in data) {
          setMessageError(data.message as string);
        }

        setMessages(data);
      }
    }

    getMessages();
  }, [currentChat]);

  const updateCurrentChat = useCallback((chat: Chat) => {
    setCurrentChat(chat);
  }, []);

  return (
    <CallContext.Provider
      value={{
        servicesPerformed,
        isUserChatsLoading,
        userChatsError,
        potentialChats,
        updateCurrentChat,
        currentChat,
        messages,
        isMessagesLoading,
        messageError,
        consumersQueue,
      }}
    >
      {children}
    </CallContext.Provider>
  );
}