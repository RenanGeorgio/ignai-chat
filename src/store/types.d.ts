import { USER_STATE, ConsumersQueue, OnlineUser, QueueItemLabel } from "@types";

type State = any

export type CurrentConversation = 
  | ConsumersQueue
  | OnlineUser

export type AddConversation = (state: State, action: PayloadAction<CurrentConversation>) => void
export type AddLabelConversation = (state: State, action: PayloadAction<QueueItemLabel>) => void
export type SetCurrentConversation = (state: State, action: PayloadAction<CurrentConversation[]>) => void
export type SetStatus = (state: State, action: PayloadAction<USER_STATE>) => void
export type RaiseError = (state: State, action: PayloadAction<{ index: number; message: string }>) => void