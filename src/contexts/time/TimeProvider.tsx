import { useState, useEffect } from 'react';
import { TimeContext } from './TimeContext';
import PropTypes from 'prop-types';

import { ReactNode } from 'react';

interface TimeProviderProps {
  children: ReactNode;
}

export const TimeProvider: React.FC<TimeProviderProps> = ({ children }) => {
  const [generalTime, setGeneralTime] = useState(0);
  const [serviceTime, setServiceTime] = useState(0);
  const [pauseTime, setPauseTime] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);
  const [pauseClicks, setPauseClicks] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState<null | NodeJS.Timer>(null);

  useEffect(() => {
    const storedTimes = JSON.parse(localStorage.getItem('times') || '{}');
    if (storedTimes) {
      setGeneralTime(storedTimes.generalTime);
      setServiceTime(storedTimes.serviceTime);
      setPauseTime(storedTimes.pauseTime);
      setPausedTime(storedTimes.pausedTime);
      setPauseClicks(storedTimes.pauseClicks);
      setTotalTime(storedTimes.totalTime);
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
        setGeneralTime(prev => prev + 1);
        setTotalTime(prev => prev + 1);
      }, 1000);
      
      setIntervalId(id);
      setIsPaused(false);
    }
  };

  const pauseTiming = () => {
    if (isPaused) {
      setIsPaused(false);
      setPauseTime((prev) => prev + pausedTime);
      setPausedTime(0);
      startTiming();
    } else {
      if (intervalId) clearInterval(intervalId);
      setIsPaused(true);
      setPauseClicks((prev) => prev + 1);
      
      const pausedStart = Date.now();
      const pausedInterval = setInterval(() => {
        // calcula o tempo em pausa
        // precisa investigar se o tempo em pausa está sendo calculado corretamente e corrigir o bug no contador
        setPausedTime(Math.floor((Date.now() - pausedStart) / 1000));
      }, 1000);
  
      setIntervalId(null);
    }
  };

  const clearTiming = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
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
