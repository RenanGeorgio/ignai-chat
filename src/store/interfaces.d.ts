import { 
  AddConversation, 
  SetCurrentConversation,
  SetStatus, 
  RaiseError,
  CurrentConversation
} from "./types";
import { USER_STATE } from "@types";

export interface IConversationsStore {
  addConversation: AddConversation
  setCurrentConversation: SetCurrentConversation
  setStatus: SetStatus
  raiseError: RaiseError
}

export interface IConversationsState {
  queueConversations: CurrentConversation[]
  userStatus: USER_STATE
}