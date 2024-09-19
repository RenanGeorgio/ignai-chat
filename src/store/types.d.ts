import { Device } from "@twilio/voice-sdk";
import { USER_STATE, ConsumersQueue, OnlineUser, QueueItemLabel } from "../types";
import type { Chat } from "@contexts/chat/types";

type State = any

export type CurrentConversation = 
  | ConsumersQueue
  | OnlineUser

export type ConversationDTO = {
  id: string | number
  device: Device
  connectToken: string
  conversation: CurrentConversation
  label: QueueItemLabel
};

export type AddConversationReference = (state: State, action: PayloadAction<ConversationDTO>) => any
export type SetCurrentConversation = (state: State, action: PayloadAction<CurrentConversation[]>) => any
export type UpdateConversation = (state: State, action: PayloadAction<string | number>) => any
export type RaiseError = (state: State, action: PayloadAction<{ index: number; message: string }>) => any
export type updateUserChats = (state: State, action: PayloadAction<string | number>) => Chat // SAMUEL
