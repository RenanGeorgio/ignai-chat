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

export type SetApiKey = (state: State, action: PayloadAction<any>) => void
export type SetSelectedDocs = (state: State, action: PayloadAction<any>) => void
export type SetSourceDocs = (state: State, action: PayloadAction<any>) => void
export type SetConversations = (state: State, action: PayloadAction<any>) => void
export type SetPrompt = (state: State, action: PayloadAction<any>) => void
export type SetChunks = (state: State, action: PayloadAction<any>) => void
export type SetTokenLimit = (state: State, action: PayloadAction<any>) => void
export type SetModalStateDeleteConv = (state: State, action: PayloadAction<ActiveState>) => void

export type SharedData = {
  queries: ChatGPTMessage[];
  title: string;
  date: string;
  identifier: string;
}

export type SharedQuery = {
  index: number; 
  query: Partial<Query>
}

export type RaiseErrorType = {
  index: number; 
  message: string;
}

export type SetSharedStatus = (state: State, action: PayloadAction<Status>)  => void
export type SetIdentifier = (state: State, action: PayloadAction<string>)  => void
export type SetFetchedData = (state: State, action: PayloadAction<SharedData>)  => void
export type SetClientApiKey = (state: State, action: PayloadAction<string>)  => void
export type AddSharedQuery = (state: State, action: PayloadAction<ChatGPTMessage>)  => void
export type UpdateSharedStreamingQuery = (state: State, action: PayloadAction<SharedQuery>)  => void
export type UpdateSharedQuery = (state: State, action: PayloadAction<SharedQuery>)  => void
export type RaiseSharedError = (state: State, action: PayloadAction<RaiseErrorType>)  => void
export type SaveToLocalStorage = (state: State, action: PayloadAction<any>)  => void