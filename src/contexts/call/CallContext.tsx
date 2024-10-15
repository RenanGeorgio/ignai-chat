import { createContext } from "react";
import { CallContextType, QueueContextType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CallContext = createContext<CallContextType>({} as any);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QueueContext = createContext<QueueContextType>({} as any);