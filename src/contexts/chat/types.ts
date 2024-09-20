import { ConversationDTO } from "../../store/types";
import { Chat, Message } from "../../types";

export interface ChatContextType {
  //userChats: Chat[]
  //isUserChatsLoading: boolean
  //userChatsError: string | null
  potentialChats: ChatClient[] | null
  updateCurrentChat: (chat: Chat | ConversationDTO) => void
  currentChat: Chat | null
  messages: Message[] | null
  isMessagesLoading: boolean
  messageError: string | null
  sendTextMessage: (
    textMessage: string,
    sender: { companyId: string },
    currentChatId: string,
    setTextMessage: (text: string) => void
  ) => Promise<void>
  sendMessageHttp?: (
    textMessage: string,
    sender: { companyId: string },
    currentChatId: string
  ) => void
  //onlineUsers: OnlineUser[]
  handleSocketIndexChange: (currentIndex: string | number) => void
}

export type User = {
  id: string
  name: string
  email: string
  companyId?: string
}

export type ChatClient = {
  _id: string
  name: string
  lastName?: string
  username: string
  createdAt?: string
  updatedAt?: string
}

export type CurrentChat = {
  id: string | number
  conversation: Chat
}

export enum Platforms {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
  WEB = 'web',
  WHATSAPP = 'whatsapp',
}

export enum ChatStatus {
  ACTIVE = "active",
  FINISHED = "finished",
  ARCHIVED = "archived",
  // DELETED = "deleted",
}