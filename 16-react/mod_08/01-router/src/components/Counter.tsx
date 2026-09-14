import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <section>
      <h1>Counter</h1>

      <p>{count}</p>

      <button type="button" onClick={handleDecrement}>
        -
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </section>
  );
}
