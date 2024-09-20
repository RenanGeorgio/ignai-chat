import { 
  AddConversationReference,
  SetCurrentConversation,
  UpdateConversation,
  updateUserChats, // SAMUEL
  RaiseError,
  CallDTO,
  ChatDTO
} from "./types";

export interface IConversationsStore {
  addConversationReference: AddConversationReference
  setCurrentConversation: SetCurrentConversation
  updateConversation: UpdateConversation
  updateUserChats: updateUserChats // SAMUEL
  raiseError: RaiseError
}

export interface IConversationsState {
  queueConversations: (CallDTO | ChatDTO)[]
}
