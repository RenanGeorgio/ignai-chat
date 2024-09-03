import { ChatGPTMessage, Query, Status } from "@types";

type State = any

export type AddQuery = (state: State, action: PayloadAction<ChatGPTMessage>) => void
export type SetConversation = (state: State, action: PayloadAction<ChatGPTMessage[]>) => void
export type UpdateStreamingQuery = (state: State, action: PayloadAction<{ index: number; query: Partial<Query> }>) => void
export type UpdateConversationId = (state: State, action: PayloadAction<{ query: Partial<Query> }>) => void
export type UpdateStreamingSource = (state: State, action: PayloadAction<{ index: number; query: Partial<Query> }>) => void
export type UpdateQuery = (state: State, action: PayloadAction<{ index: number; query: Partial<Query> }>) => void
export type SetStatus = (state: State, action: PayloadAction<Status>) => void
export type RaiseError = (state: State, action: PayloadAction<{ index: number; message: string }>) => void