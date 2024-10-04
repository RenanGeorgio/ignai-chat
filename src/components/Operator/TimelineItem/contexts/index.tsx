/* eslint-disable react/prop-types */
import { createContext, useContext, ReactNode } from "react";

interface Props {
  value: any
  children?: ReactNode
}

const Timeline = createContext<Props>({} as Props);

function TimelineProvider({ children, value }: Props) {
  return (
    <Timeline.Provider value={value}>
      {children}
    </Timeline.Provider>
  );
}

function useTimeline() {
  return useContext(Timeline);
}

export { TimelineProvider, useTimeline };
/* eslint-enable react/prop-types */