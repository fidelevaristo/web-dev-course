import { useEffect, useRef, useState } from "react";

type CounterProps = {
  initialValue: number;
  incrementAmount: number;
};

export function Counter({
  initialValue,
  incrementAmount,
}: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  const directionRef = useRef<"up" | "down" | "same">("same");
  const previousDirectionRef = useRef<"up" | "down" | "same">("same");

  useEffect(() => {
    if (counter > initialValue) {
      directionRef.current = "up";
    } else if (counter < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = "same";
    }

    if (directionRef.current !== previousDirectionRef.current) {
      console.log(directionRef.current);
      previousDirectionRef.current = directionRef.current;
    }
  }, [counter, initialValue]);

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
      <h2>{counter}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={handleDecrement}>
        Decrement
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}