import { useEffect } from 'react';

export function useTimer(isActive, timeLeft, setTimeLeft) {
  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, setTimeLeft]);
}