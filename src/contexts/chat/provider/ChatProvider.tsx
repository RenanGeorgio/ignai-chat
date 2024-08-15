import React, { useCallback, useEffect, useState, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import Cookies from "js-cookie";

import { ChatContext } from "../ChatContext";
import { getChat, postChat } from "@controllers/chat";
import { useUser } from "@contexts/user/hooks";
import compareArrays from "@helpers/compareArrays";
import { baseUrl } from "@config";
import { Chat, ChatClient, Message, OnlineUser, ChatStatus } from "../types";


type ChatProviderProps = {
  children: ReactNode
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [userChats, setUserChats] = useState<Chat[]>([]);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState<boolean>(false);
  const [userChatsError, setUserChatsError] = useState<string | null>(null);
  const [potentialChats, setPotentialChats] = useState<ChatClient[] | null>(null);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [newMessage, setNewMessage] = useState<Message | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  const { user } = useUser();

  useEffect(() => {
    const newSocket = io(baseUrl as string, {
      auth: {
        token: 'Bearer ' + Cookies.get('token'),
      }
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    }
  }, [user]);

  useEffect(() => {
    if (socket === null) {
      return
    }

    socket.emit('addNewUser', { userId: user?.companyId, platform: 'typebot' });

    socket.on('onlineUsers', (users: OnlineUser[]) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off('onlineUsers');
    }
  }, [socket, user?.companyId]);

  useEffect(() => {
    if (!socket) {
      return
    }
    
    const recipientId = currentChat?.members?.find((id: string) => id !== user?.companyId);

    if (!recipientId) {
      return
    }

    console.log("send message event");
    socket.emit('sendMessage', { ...newMessage, recipientId });
    setNewMessage(null);
  }, [newMessage, socket]);

  useEffect(() => {
    if (!socket) {
      return
    }

    socket.on('getMessage', (res: Message) => {
      if (currentChat?._id !== res.chatId) {
        return
      }

      setMessages((prev: any) => [...(prev || []), res]);
    });

    return () => {
      socket.off('getMessage');
    }
  }, [socket, currentChat]);

  useEffect(() => {
    if (socket === null) {
      return
    }

    socket.on('newUserChat', (client: Chat) => {
      if (userChats != undefined) {
        const isChatCreated = userChats?.some((chat: Chat) =>
          compareArrays(chat?.members, client?.members) &&
          client.status === chat.status
        );

        if (isChatCreated) {
          return
        }
      }

      setUserChats((prev: any) => [...(prev || []), client]);
    });

    return () => {
      socket.off('newUserChat');
    }
  }, [socket, userChats]);

  useEffect(() => {
    if (!userChats) {
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

        if (userChats) {
          isChatCreated = userChats?.some((chat: any) => {
            const members_: string[] = chat.members;

            return members_?.includes(client._id) && chat.status === ChatStatus.ACTIVE;
          });
        }

        return !isChatCreated
      });
      
      setPotentialChats(pChats);
    }

    getClients();
  }, [user, userChats]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?.companyId) {
        setIsUserChatsLoading(true);

        const response = await getChat(`chat/${user.companyId}`);

        if (!response.ok) {
          return setUserChatsError('error');
        }

        const data: Chat[] = await response.json();

        setUserChats(data);
      }
    }

    getUserChats();
  }, [user, onlineUsers]);

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

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket?.on("disconnectClient", () => {
      console.log("evento de desconexão")
      if (currentChat) {
        setCurrentChat((prev: Chat) => ({
          ...prev,
          status: ChatStatus.FINISHED
        }));
      }
    });
  }, [socket, currentChat]);

  const sendTextMessage = useCallback(
    async (
      textMessage: string,
      sender: { companyId: string },
      currentChatId: string,
      setTextMessage: (text: string) => void
    ) => {
      if (textMessage === '') {
        return
      }

      const msgObj = {
        text: textMessage,
        senderId: sender.companyId,
        chatId: currentChatId,
      }

      const response = await postChat('chat/message', msgObj);

      const data: Message = await response.json();

      if (!response.ok) {
        return console.log(response);
      }

      setNewMessage(data);
      setMessages((prev: any) => (prev ? [...prev, data] : [data]));
      setTextMessage('');
  }, []);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
        potentialChats,
        updateCurrentChat,
        currentChat,
        messages,
        isMessagesLoading,
        messageError,
        sendTextMessage,
        onlineUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}