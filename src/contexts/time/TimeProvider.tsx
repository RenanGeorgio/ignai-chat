import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TimeContext } from "./TimeContext";

interface TimeProviderProps {
  children: React.ReactNode;
}

export const TimeProvider: React.FC<TimeProviderProps> = ({ children }: TimeProviderProps) => {
  const [generalTime, setGeneralTime] = useState(0);
  const [serviceTime, setServiceTime] = useState(0);  
  const [pauseTime, setPauseTime] = useState(0);      
  const [pausedTime, setPausedTime] = useState(0);    
  const [pauseClicks, setPauseClicks] = useState(0);
  const [totalTime, setTotalTime] = useState(0);      
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState<null | NodeJS.Timer>(null);
  const [pausedIntervalId, setPausedIntervalId] = useState<null | NodeJS.Timer>(null); 

  useEffect(() => {
    const storedTimes = JSON.parse(localStorage.getItem('times') || '{}');
    if (storedTimes) {
      setGeneralTime(storedTimes.generalTime || 0);
      setServiceTime(storedTimes.serviceTime || 0);
      setPauseTime(storedTimes.pauseTime || 0);
      setPausedTime(storedTimes.pausedTime || 0);
      setPauseClicks(storedTimes.pauseClicks || 0);
      setTotalTime(storedTimes.totalTime || 0);
    }
  }, []);

  useEffect(() => {
    const times = {
      generalTime,
      serviceTime,
      pauseTime,
      pausedTime,
      pauseClicks,
      totalTime,
    };
    localStorage.setItem('times', JSON.stringify(times));
  }, [generalTime, serviceTime, pauseTime, pausedTime, pauseClicks, totalTime]);

  const startTiming = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTotalTime(prev => prev + 1);  
        setGeneralTime(prev => prev + 1);
      }, 1000);

      setIntervalId(id);
      setIsPaused(false);
      if (pausedIntervalId) {
        clearInterval(pausedIntervalId);
        setPausedIntervalId(null);
      }
    }
  };

  const pauseTiming = () => {
    if (isPaused) {
      setIsPaused(false);
      setPauseClicks(prev => prev + 1);
      startTiming();
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      setIsPaused(true);
      setPauseClicks(prev => prev + 1);

      const pausedStart = Date.now();
      const pausedInterval = setInterval(() => {
        // calcula o tempo em pausa
        const elapsedPausedTime = Math.floor((Date.now() - pausedStart) / 1000);
        setPausedTime(elapsedPausedTime);  // atualiza o tempo da sessão de pausa
        setPauseTime(prev => prev + 1);    // incrementa o tempo acumulado de pausa
        setGeneralTime(prev => prev + 1);  // continua contando o tempo geral
      }, 1000);

      setPausedIntervalId(pausedInterval);
    }
  };

  const clearTiming = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    if (pausedIntervalId) {
      clearInterval(pausedIntervalId);
      setPausedIntervalId(null);
    }
  };

  return (
    <TimeContext.Provider
      value={{
        generalTime,
        serviceTime,
        pauseTime,
        pausedTime,
        pauseClicks,
        totalTime,
        startTiming,
        pauseTiming,
        clearTiming,
        isPaused,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

TimeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
