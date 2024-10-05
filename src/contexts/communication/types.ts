export interface CommunicationContextType {
  [key: string]: any
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