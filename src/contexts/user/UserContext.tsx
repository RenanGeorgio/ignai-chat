import { Context, createContext } from "react";
import { UserContextInterface } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserContext: Context<UserContextInterface> = createContext({} as any);