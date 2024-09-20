import React, { useCallback, useEffect, useState, ReactNode, useRef } from "react";
import { io, Socket } from "socket.io-client";
// import Cookies from "js-cookie";

import { ChatContext } from "../ChatContext";
import { selectQueueConversation } from "../../../store/conversations/slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addConversationReference } from "../../../store/conversations/actions";
import { getChat, postChat } from "../../../controllers/chat";
import compareArrays from "../../../helpers/compareArrays";

import { Chat, ConsumersQueue,  Message } from "../../../types";
import { ChatDTO, ConversationDTO } from "../../../store/types";

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

const baseUrl = process.env.REACT_APP_CHAT_API

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const queueChats: ConversationDTO[] = useAppSelector(selectQueueConversation);
  const dispatch = useAppDispatch();

  const [userChats, setUserChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [newMessage, setNewMessage] = useState<Message | null>(null);
  
  // const { user } = useUser();

  const socket = useRef<Socket | undefined>(undefined);

  function isChat(conversation: Chat | ConsumersQueue): conversation is Chat {
    return (conversation as Chat).members !== undefined;
  }

  const handleSocketIndexChange = (index: string | number) => { 
    // @ts-ignore
    const found: ChatDTO | undefined = queueChats?.find((item: ConversationDTO) => item?.id == index);

    if (found != undefined) {
      // @ts-ignore
      dispatch(updateConversation(index)); 

      const conversation: Chat = found?.conversation;
      
      setCurrentChat(conversation);
    }
  };

  useEffect(() => {
    if (!user) {
      return
    }

    socket.current = io(baseUrl as string, {
      auth: {
        // token: 'Bearer ' + Cookies.get('token'),
        token:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWJiZTAzNTlmODRkYTNhZjYwMWYzNzMifQ.kDH1o74vbiZgnYvNhBfQuFYIf8F4JlLVBLb3TIW1uKc',
      },
    }) as Socket;

    return () => {
      socket.current?.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (!socket.current) {
      return;
    }

    const recipientId = currentChat?.members?.find(
      (id: string) => id !== user?.companyId,
    );

    if (!recipientId) {
      return;
    }

    console.log('send message event');
    socket.current?.emit('sendMessage', { ...newMessage, recipientId });
    setNewMessage(null);
  }, [newMessage, socket.current]);

  useEffect(() => {
    if (socket.current === null) {
      return;
    }

    socket.current?.on('newUserChat', (client: Chat) => {
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
        const id = queueChats.length + 1;
        const currentDate = (Date.now()).toString();

        const com: ChatDTO = {
          id: id.toString(),
          socket: socket.current as Socket,
          conversation: client,
          label: {
            emoji: client.origin.platform,
            id: id,
            startTime: currentDate,
            status: 'on',
            waitTime: undefined,
          },
        };

        dispatch(addConversationReference(com));
      }
    });

    return () => {
      socket.current?.off('newUserChat');
    };
  }, [socket.current, userChats]);

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
    if (!socket.current) {
      return;
    }

    socket.current?.on('disconnectClient', () => {
      console.log('evento de desconexão');
      if (currentChat) {
        // setCurrentChat((prev: Chat) => ({
        //   ...prev,
        //   status: ChatStatus.FINISHED,
        // }));
      }
    });
  }, [socket.current, currentChat]);

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

  useEffect(() => {
    // @ts-ignore
    const chatItems: ChatDTO[] = queueChats?.filter((item: ConversationDTO) => isChat(item.conversation));

    if ((chatItems != undefined) && (chatItems?.length > 0)) {
      const chatConversations: Chat[] = chatItems?.map((item: ChatDTO) => item?.conversation);

      setUserChats(chatConversations);
    }
  },[queueChats]);

  return (
    <ChatContext.Provider
      value={{
        updateCurrentChat,
        currentChat,
        messages,
        isMessagesLoading,
        messageError,
        sendTextMessage,
        handleSocketIndexChange,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};