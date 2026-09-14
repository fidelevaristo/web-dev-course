import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

type CounterProps = {
  initialValue: number;
  incrementAmount: number;
};

export function Counter({ initialValue, incrementAmount }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    /*
      È meglio passare una funzione al setter quando il nuovo stato
      dipende dallo stato precedente.

      React può raggruppare più aggiornamenti di stato, quindi usare:

      setCounter(counter + incrementAmount)

      può usare un valore non aggiornato di counter.

      Invece:

      setCounter((currentCounter) => currentCounter + incrementAmount)

      garantisce che stiamo usando sempre il valore più recente.
    */
    setCounter((currentCounter) => currentCounter + incrementAmount);
  }

  function handleDecrement() {
    setCounter((currentCounter) => currentCounter - incrementAmount);
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
