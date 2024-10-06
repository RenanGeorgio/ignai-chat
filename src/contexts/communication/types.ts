import { CONVERSATION_CHANNEL } from "../../types";

export interface CommunicationContextType {
  workerPlataform: CONVERSATION_CHANNEL | null
}

export enum COMM_STATE {
  BUSY = 'Busy',
  ON_HOLD = 'On Hold',
  WAITING = 'Waiting',
  READY = 'Ready',
  AVAILABLE = 'Available',
  ON_BREAK = 'On Break',
  OFFLINE = 'Offline',
  ERROR = 'Error'
}