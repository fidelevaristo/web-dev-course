import { decrement, increment, reset } from "../store/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function ReduxCounter() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <section>
      <h2>Redux Counter</h2>

      <p>Counter: {count}</p>

      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>

      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>

      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
    </section>
  );
}