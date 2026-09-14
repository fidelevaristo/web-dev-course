import { useState } from "react";

export function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((currentCount) => currentCount + step);
  }

  function decrement() {
    setCount((currentCount) => currentCount - step);
  }

  function reset() {
    setCount(initialValue);
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
