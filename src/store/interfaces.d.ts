import { 
  AddQuery, 
  SetConversation, 
  UpdateStreamingQuery, 
  UpdateConversationId, 
  UpdateStreamingSource, 
  UpdateQuery, 
  SetStatus, 
  RaiseError
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