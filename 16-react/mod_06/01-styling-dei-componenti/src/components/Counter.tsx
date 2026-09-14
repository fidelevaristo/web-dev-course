import { useState } from "react";

type CounterProps = {
  initialValue: number;
  incrementAmount: number;
};

export function Counter({ initialValue, incrementAmount }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div>
      <h2
        style={{
          width: "140px",
          height: "140px",
          display: "grid",
          placeItems: "center",
          margin: "0 0 24px",
          borderRadius: "50%",
          fontSize: "52px",
          background: "linear-gradient(135deg, #22c55e, #14b8a6)",
          color: "white",
          boxShadow: "0 20px 45px rgba(20, 184, 166, 0.35)",
        }}
      >
        {counter}
      </h2>

      <button onClick={() => setCounter((value) => value + incrementAmount)}>
        Increment
      </button>

      <button onClick={() => setCounter((value) => value - incrementAmount)}>
        Decrement
      </button>

      <button onClick={() => setCounter(initialValue)}>Reset</button>
    </div>
  );
}
