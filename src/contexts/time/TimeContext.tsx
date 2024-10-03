import type { TimerContextType } from '@contexts/chat/types';
import { createContext } from 'react';

export const TimeContext = createContext<TimerContextType>({} as TimerContextType);
