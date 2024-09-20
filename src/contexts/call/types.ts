import { Device } from "@twilio/voice-sdk";
import { ConsumersQueue, Obj, USER_STATE } from "../../types";

export interface Message {
  _id: string
  senderId: string
  chatId?: string
  text: string
  timestamp?: number
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

export interface CallContextType {
  servicesPerformed: ServicesPerformed[]
  userState: USER_STATE
  setUserState: (state: USER_STATE) => void
  currentState: CallState
  handleIndexChange: (currentIndex: string | number) => void
  getDevice: () => Device
}

export type CurrentDeviceToCall = {
  currentConversation: ConsumersQueue
  device: Device
  connectToken: string
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

export type CallState = {
  identity: string
  status: any
  ready: boolean
}

export enum Platforms {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
  WEB = 'web',
  WHATSAPP = 'whatsapp',
  PHONE = 'phone'
}

export enum ChatStatus {
  ACTIVE = "active",
  FINISHED = "finished",
  ARCHIVED = "archived",
  DELETED = "deleted",
}