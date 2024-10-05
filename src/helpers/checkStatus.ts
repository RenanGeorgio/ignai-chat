import { CHAT_STATUS } from "../contexts/chat/types";

export const checkChatStatus = (status: string): boolean => {
  if (status === CHAT_STATUS.ACTIVE) {
    return true;
  }
  
  return false;
};
