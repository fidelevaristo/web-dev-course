import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

type CounterProps = {
  initialValue: number;
  incrementAmount: number;
};

export function Counter({ initialValue, incrementAmount }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log("Current counter:", counter);
  }, [counter]);

  function handleIncrement() {
    setCounter((current) => current + incrementAmount);
  }

  function handleDecrement() {
    setCounter((current) => current - incrementAmount);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
