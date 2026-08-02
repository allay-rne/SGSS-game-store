import {useEffect, useState} from "react";

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calculateTimeLeft() {
      const now = new Date();
      const diffInMs = targetDate.getTime() - now.getTime();

      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffInMs / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return timeLeft
}

export default useCountdown