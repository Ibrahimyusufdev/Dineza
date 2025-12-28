import { useEffect, useState } from "react";

export const useCountdown = (initialSeconds: number) => {

  const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
    // stop running if seconds is 0 at first, since original seconds starts at 3s
    if (seconds == 0) return;

    // Decrease seconds after every 1s
    const timer = setTimeout(() => {
      setSeconds((second) => second - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  return seconds;
} 