import { createContext } from "react";
import type { TimerContextType } from "../chat/types";

export const TimeContext = createContext<TimerContextType>({} as TimerContextType);
