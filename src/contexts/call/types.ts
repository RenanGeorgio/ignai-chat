import { CallerInfo } from "@twilio/voice-sdk";
import { Obj } from "@types";

export interface Message {
  _id: string
  senderId: string
  chatId?: string
  text: string
  timestamp?: number
  createdAt?: string
  updatedAt?: string
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

export interface ServicesPerformed {
  info: Obj
  chat: Chat
  updatedAt: string
  createdAt: string
}

export interface ITicket extends ServicesPerformed {
  avaliation: number
  sugestion?: string
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

export interface OnlineUser  {
  userId: string
  socketId: string
}

export interface ConsumersQueue {
  queueId: string | number
  callData: CallType
  priority?: number
  updatedAt: string
  createdAt: string
}

export type CallType = {
  callerInfo?: CallerInfo | null
  parameters: Obj
  defaultMaxListeners: number
  customParameters?: any
  outboundConnectionId?: undefined | string
}

export type CallContextType = {
  servicesPerformed: Chat[]
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
  consumersQueue: OnlineUser[]
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

export type CallState = {
  identity: string
  status: any
  ready: boolean
}

export enum USER_STATE {
  CONNECTING = "Connecting",
  READY = "Ready",
  INCOMING = "Incoming",
  ON_CALL = "On call",
  OFFLINE = "Offline",
  ERROR = "Error",
}