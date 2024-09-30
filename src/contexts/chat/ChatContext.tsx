import { createContext } from "react";
import { ChatContextType, type InactiveChatsContextType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export const InactiveChatsContext = createContext<InactiveChatsContextType>({} as InactiveChatsContextType);
