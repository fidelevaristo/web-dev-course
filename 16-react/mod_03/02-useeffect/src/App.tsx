import { Counter } from "./components/Counter";
import { Clock } from "./components/Clock";

function App() {
  return (
    <div>
      <Counter initialValue={0} incrementAmount={1} />

      <Clock />
    </div>
  );
}

export default App;
