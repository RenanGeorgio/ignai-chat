import { createContext } from "react";
import { CommunicationContextType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CommunicationContext = createContext<CommunicationContextType>({} as any);