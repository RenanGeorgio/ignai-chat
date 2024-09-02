import { 
  AddQuery, 
  SetConversation, 
  UpdateStreamingQuery, 
  UpdateConversationId, 
  UpdateStreamingSource, 
  UpdateQuery, 
  SetStatus, 
  RaiseError,
  SetApiKey,
  SetSelectedDocs,
  SetSourceDocs,
  SetConversations,
  SetModalStateDeleteConv,
  SetPrompt,
  SetChunks,
  SetTokenLimit,
  SetSharedStatus,
  SetIdentifier,
  SetFetchedData,
  SetClientApiKey,
  AddSharedQuery,
  UpdateSharedStreamingQuery,
  UpdateSharedQuery,
  RaiseSharedError,
  SaveToLocalStorage
} from "./types";

export interface IConversationStore {
  addQuery: AddQuery
  setConversation: SetConversation
  updateStreamingQuery: UpdateStreamingQuery
  updateConversationId: UpdateConversationId
  updateStreamingSource: UpdateStreamingSource
  updateQuery: UpdateQuery
  setStatus: SetStatus
  raiseError: RaiseError
}

export interface IPreferencesStore {
  setApiKey: SetApiKey
  setSelectedDocs: SetSelectedDocs 
  setSourceDocs: SetSourceDocs
  setConversations: SetConversations
  setPrompt: SetPrompt
  setChunks: SetChunks
  setTokenLimit: SetTokenLimit
  setModalStateDeleteConv: SetModalStateDeleteConv
}

export interface ISharedConversationStore {
  setStatus: SetSharedStatus
  setIdentifier: SetIdentifier
  setFetchedData: SetFetchedData
  setClientApiKey: SetClientApiKey
  addQuery: AddSharedQuery
  updateStreamingQuery: UpdateSharedStreamingQuery
  updateQuery: UpdateSharedQuery
  raiseError: RaiseSharedError
  saveToLocalStorage: SaveToLocalStorage
}