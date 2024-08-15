import { createContext } from "react";
import { ChatContextType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChatContext = createContext<ChatContextType>({} as any)