import { Call } from "@twilio/voice-sdk";
import type { CallerInfo } from "@twilio/voice-sdk";


export type Obj = {
  [key: string]: any
}

export type QueueItemLabel = {
  emoji: any
  id: string | number
  startTime: string
  status: string
  waitTime: string | undefined
}

export type CallType = {
  callerInfo: CallerInfo | null
  parameters: Obj
  defaultMaxListeners: number
  customParameters?: any
  outboundConnectionId?: undefined | string
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

export enum USER_STATE {
  CONNECTING = "Connecting",
  READY = "Ready",
  INCOMING = "Incoming",
  ON_CALL = "On call",
  OFFLINE = "Offline",
  ERROR = "Error",
}