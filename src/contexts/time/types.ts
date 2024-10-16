export type TimerContextType = {
  generalTime: number;
  serviceTime: number;
  pauseTime: number;
  pausedTime: number;
  pauseClicks: number;
  clearTiming: () => void;
  totalTime: number;
  startTiming: () => void;
  pauseTiming: () => void;
  isPaused: boolean;
};