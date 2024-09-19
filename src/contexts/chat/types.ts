import { OnlineUser } from "@types";

export interface Message {
  _id: string
  senderId: string
  chatId: string
  text: string
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  name: string
  email: string
  companyId?: string
}

export interface ChatClient {
  _id: string
  name: string
  lastName?: string
  username: string
  createdAt?: string
  updatedAt?: string
}

export type Chat = {
  _id: string
  members: string[]
  messages?: Message[]
  origin: {
    platform: Platforms
    chatId?: string
  }
  status: ChatStatus
  createdAt: string
  updatedAt: string
  __v?: number
}

export type ChatContextType = {
  userChats: Chat[]
  isUserChatsLoading: boolean
  userChatsError: string | null
  potentialChats: ChatClient[] | null
  updateCurrentChat: (chat: Chat) => void
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
  onlineUsers: OnlineUser[]
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