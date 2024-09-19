import { 
  AddConversationReference,
  SetCurrentConversation,
  UpdateConversation,
  updateUserChats,
  RaiseError,
  CurrentConversation
} from "./types";

export interface IConversationsStore {
  addConversationReference: AddConversationReference
  setCurrentConversation: SetCurrentConversation
  updateConversation: UpdateConversation
  updateUserChats: updateUserChats
  raiseError: RaiseError
}

export interface IConversationsState {
  queueConversations: ConversationDTO[],
  userChats: Chat[]
}