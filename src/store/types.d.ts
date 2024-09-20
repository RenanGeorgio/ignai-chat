import { Device } from "@twilio/voice-sdk";
import { Socket } from "socket.io-client";
import { USER_STATE, ConsumersQueue, Chat, QueueItemLabel } from "../types";

type State = any

export type CurrentConversation = 
  | ConsumersQueue
  | Chat

export type CallDTO = {
  id: string | number
  device: Device
  connectToken: string
  conversation: ConsumersQueue
  label: QueueItemLabel
};

export type ChatDTO = {
  id: string | number
  socket: Socket
  conversation: Chat
  label: QueueItemLabel
};

export type ConversationDTO = (CallDTO | ChatDTO);

export type AddConversationReference = (state: State, action: PayloadAction<ConversationDTO>) => any
export type SetCurrentConversation = (state: State, action: PayloadAction<CurrentConversation[]>) => any
export type UpdateConversation = (state: State, action: PayloadAction<string | number>) => any
export type RaiseError = (state: State, action: PayloadAction<{ index: number; message: string }>) => any
export type updateUserChats = (state: State, action: PayloadAction<string | number>) => Chat // SAMUEL