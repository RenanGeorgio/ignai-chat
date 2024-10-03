import { createContext } from "react";
import type { TimerContextType } from "@contexts/chat/types";

export const TimeContext = createContext<TimerContextType>({} as TimerContextType);
