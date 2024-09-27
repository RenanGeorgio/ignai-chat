import { ChatStatus } from '../contexts/chat/types';

export const checkChatStatus = (status: string): boolean => {
  if (status === ChatStatus.ACTIVE) {
    return true;
  }
  return false;
};