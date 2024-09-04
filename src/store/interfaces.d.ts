import { 
  AddConversation, 
  AddConversationReference,
  AddLabelConversation,
  SetCurrentConversation,
  RaiseError,
  CurrentConversation
} from "./types";

export interface IConversationsStore {
  addConversation: AddConversation
  addConversationReference: AddConversationReference
  addLabelConversation: AddLabelConversation
  setCurrentConversation: SetCurrentConversation
  raiseError: RaiseError
}

export interface IConversationsState {
  queueConversations: ConversationDTO[]
}