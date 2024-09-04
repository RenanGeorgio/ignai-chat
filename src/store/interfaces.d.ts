import { 
  AddConversationReference,
  SetCurrentConversation,
  RaiseError,
  CurrentConversation
} from "./types";

export interface IConversationsStore {
  addConversationReference: AddConversationReference
  setCurrentConversation: SetCurrentConversation
  raiseError: RaiseError
}

export interface IConversationsState {
  queueConversations: ConversationDTO[]
}