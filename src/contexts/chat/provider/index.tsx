import React, { useCallback, useEffect, useState, ReactNode } from 'react';
import { Socket } from 'socket.io-client';
// import Cookies from 'js-cookie';

import { ChatContext } from '../ChatContext';
// import { useUser } from '../../user/hooks';
import { getChat, postChat } from '../../../controllers/chat';
import compareArrays from '../../../helpers/compareArrays';
// import { baseUrl } from '../../../config/index';
import { Chat, ChatClient, Message, ChatStatus } from '../types';
import { OnlineUser } from '@types';

type ChatProviderProps = {
  children: ReactNode;
};

const user = {
  _id: '65bbe0359f84da3af601f373',
  name: 'Samuel',
  email: 'samuelmarques96@live.com',
  cpf: '255.975.630-76',
  company: 'Sam`s Company',
  createdAt: {
    $date: '2024-02-01T18:17:25.739Z',
  },
  updatedAt: {
    $date: '2024-02-01T18:17:25.739Z',
  },
  __v: 0,
  companyId: '1',
};

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [userChats, setUserChats] = useState<Chat[]>([]);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState<boolean>(false);
  const [userChatsError, setUserChatsError] = useState<string | null>(null);
  const [potentialChats, setPotentialChats] = useState<ChatClient[] | null>(
    null,
  ); // verificar esse tipo dps
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [newMessage, setNewMessage] = useState<Message | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  // const { user } = useUser();

  // useEffect(() => {
  //   const newSocket = io(baseUrl as string, {
  //     auth: {
  //       token: 'Bearer ' + Cookies.get('token'),
  //     },
  //   });

  //   setSocket(newSocket);

  //   return () => {
  //     newSocket.disconnect();
  //   };
  // }, [user]);

  useEffect(() => {
    if (socket === null) {
      return;
    }

    socket.emit('addNewUser', { userId: user?.companyId, platform: 'typebot' });

    socket.on('onlineUsers', (users: OnlineUser[]) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off('onlineUsers');
    };
  }, [socket, user?.companyId]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    const recipientId = currentChat?.members?.find(
      (id: string) => id !== user?.companyId,
    );

    if (!recipientId) {
      return;
    }

    console.log('send message event');
    socket.emit('sendMessage', { ...newMessage, recipientId });
    setNewMessage(null);
  }, [newMessage, socket]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('getMessage', (res: Message) => {
      if (currentChat?._id !== res.chatId) {
        return;
      }

      setMessages((prev: any) => [...(prev || []), res]);
    });

    return () => {
      socket.off('getMessage');
    };
  }, [socket, currentChat]);

  useEffect(() => {
    if (socket === null) {
      return;
    }

    socket.on('newUserChat', (client: Chat) => {
      if (userChats != undefined) {
        const isChatCreated = userChats?.some(
          (chat: Chat) =>
            compareArrays(chat?.members, client?.members) &&
            client?.status === chat?.status,
        );

        if (isChatCreated) {
          return;
        }
      }

      if (client != undefined) {
        setUserChats((prev: any) => [...(prev || []), client]);
      }
    });

    return () => {
      socket.off('newUserChat');
    };
  }, [socket, userChats]);

  useEffect(() => {
    if (!userChats) {
      return;
    }

    const getClients = async () => {
      const response = await getChat('chat/clients');

      let data: any[] = [];
      if (response?.status == 200) {
        const { potentialChats } = await response.data;

        data = potentialChats;
        
        if ((data != undefined) && (data.length > 0)) {
          const pChats = data?.filter((client) => {
            let isChatCreated = false;

            if (!(user?._id === client?._id)) {
              return false;
            }

            if (userChats) {
              isChatCreated = userChats?.some((chat: any) => {
                const members_: string[] = chat.members;

                return (
                  members_?.includes(client._id) &&
                  chat.status === ChatStatus.ACTIVE
                );
              });
            }

            return !isChatCreated;
          });
          // @ts-ignore - ignorado por enquanto
          setPotentialChats(pChats);
        } else {
          // @ts-ignore
          setPotentialChats([]);
        }
      } else {
        const value = response?.data?.message as string;

        return setUserChatsError(value);
      }
    };

    getClients();
  }, [user, userChats]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?.companyId) {
        setIsUserChatsLoading(true);

        const response = await getChat(`chat/${user.companyId}`);
        let data: Chat[] = [];
        if (response) {
          const value: any = await response?.data;

          if (value) {
            data = value;
            if ((data != undefined) && (data.length > 0)) {
              setUserChats(data);
            } else {
              // @ts-ignore
              setUserChats([]);
            }
          }
        } else {
          return setUserChatsError('error');
        }
      }
    };

    getUserChats();
  }, [user, onlineUsers]);

  useEffect(() => {
    const getMessages = async () => {
      setIsMessagesLoading(true);
      setMessageError(null);
      if (currentChat) {
        const response = await getChat(`chat/message/${currentChat._id}`);

        setIsMessagesLoading(false);

        const data: Message[] = await response?.data;

        if (!response && 'message' in data) {
          setMessageError(data?.message as string);
        }

        setMessages(data);
      }
    };

    getMessages();
  }, [currentChat]);

  const updateCurrentChat = useCallback((chat: Chat | null) => {
    setCurrentChat(chat);
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket?.on('disconnectClient', () => {
      console.log('evento de desconexão');
      if (currentChat) {
        // setCurrentChat((prev: Chat) => ({
        //   ...prev,
        //   status: ChatStatus.FINISHED,
        // }));
      }
    });
  }, [socket, currentChat]);

  const sendTextMessage = useCallback(
    async (
      textMessage: string,
      sender: { companyId: string },
      currentChatId: string,
      setTextMessage: (text: string) => void,
    ): Promise<void> => {
      if (textMessage === '') {
        return;
      }

      const msgObj = {
        text: textMessage,
        senderId: sender.companyId,
        chatId: currentChatId,
      };

      const response = await postChat('chat/message', msgObj);

      if (response) {
        const data: Message = await response.data;
        setNewMessage(data);
        setMessages((prev: any) => (prev ? [...prev, data] : [data]));
      }

      if (!response) {
        console.log(response);
        return;
      }

      setTextMessage('');
    },
    [],
  );

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
};
