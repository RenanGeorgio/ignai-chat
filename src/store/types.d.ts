import { Device } from "@twilio/voice-sdk";
import { USER_STATE, ConsumersQueue, OnlineUser, QueueItemLabel } from "@types";

type State = any

export type CurrentConversation = 
  | ConsumersQueue
  | OnlineUser

export type ConversationDTO = {
  id: string | number
  device?: typeof Device
  connectToken: string | undefined
  conversation: CurrentConversation
  label: QueueItemLabel
};

export type AddConversationReference = (state: State, action: PayloadAction<ConversationDTO>) => void
export type SetCurrentConversation = (state: State, action: PayloadAction<CurrentConversation[]>) => void
export type UpdateConversation = (state: State, action: PayloadAction<Partial<ConversationDTO>>) => void
export type RaiseError = (state: State, action: PayloadAction<{ index: number; message: string }>) => void