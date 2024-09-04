import { 
  AddConversationReference,
  SetCurrentConversation,
  UpdateConversation,
  RaiseError,
  CurrentConversation
} from "./types";

export interface IConversationsStore {
  addConversationReference: AddConversationReference
  setCurrentConversation: SetCurrentConversation
  updateConversation: UpdateConversation
  raiseError: RaiseError
}

export interface IConversationsState {
  queueConversations: ConversationDTO[]
}