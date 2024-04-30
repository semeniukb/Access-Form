import { useEffect, useState } from "react";

export const useCountdown = (seconds: number) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(Math.floor((seconds - Date.now()) / 1000));

    const interval = setInterval(() => {
      setTimer(value => {
        if (value > 0) return value - 1;
        else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return timer;
};
