import { 
  AddConversation, 
  AddLabelConversation,
  SetCurrentConversation,
  SetStatus, 
  RaiseError,
  CurrentConversation
} from "./types";
import { USER_STATE, QueueItemLabel } from "@types";

export interface IConversationsStore {
  addConversation: AddConversation
  addLabelConversation: AddLabelConversation
  setCurrentConversation: SetCurrentConversation
  setStatus: SetStatus
  raiseError: RaiseError
}

export interface IConversationsState {
  queueConversations: CurrentConversation[]
  queueItemLabel: QueueItemLabel[]
  userStatus: USER_STATE
}