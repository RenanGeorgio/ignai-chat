import { createContext } from "react";
import type { TimerContextType } from "./types";

export const TimeContext = createContext<TimerContextType>({} as TimerContextType);