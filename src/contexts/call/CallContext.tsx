import { createContext } from "react";
import { CallContextType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CallContext = createContext<CallContextType>({} as any)