import { Call } from "@twilio/voice-sdk";
import { ChatStatus, Platforms } from "./contexts/chat/types";

export type Obj = {
  [key: string]: any
}

export type QueueItemLabel = {
  emoji: CONVERSATION_CHANNEL | Platforms
  id: string | number
  startTime: string
  status: string
  waitTime: string | undefined
}

export type CallType = {
  callerInfo: Call.CallerInfo | null
  parameters: Obj
  defaultMaxListeners: number
  customParameters?: any
  outboundConnectionId?: undefined | string
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

export interface ConsumersQueue {
  queueId: string | number
  callData: Call
  priority?: number
  error?: any
  updatedAt: string
  createdAt: string
}

export interface OnlineUser  {
  userId: string
  socketId: string
}

export interface Message {
  _id: string
  senderId: string
  chatId: string
  text: string
  createdAt: string
  updatedAt: string
}

export enum USER_STATE {
  CONNECTING = 'Connecting',
  READY = 'Ready',
  INCOMING = 'Incoming',
  ON_CALL = 'On call',
  OFFLINE = 'Offline',
  ERROR = 'Error',
}

export enum CONVERSATION_CHANNEL {
  CALL = 'call',
  VIDEO = 'video-call',
  EMAIL = 'email',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  MESSENGER = 'facebook-messenger',
  EMBED = 'embed-on-site',
  SMS = 'sms',
  TELEGRAM = 'telegram',
}