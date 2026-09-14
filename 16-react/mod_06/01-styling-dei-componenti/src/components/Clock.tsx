import { useEffect, useState } from "react";
import "../styles/Clock.scss";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <p className="clock__label">Current time</p>
      <h2 className="clock__time">{time.toLocaleTimeString()}</h2>
    </div>
  );
}
