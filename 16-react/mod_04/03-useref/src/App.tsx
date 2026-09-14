import { Counter } from "./components/Counter";
import { FocusableInput } from "./components/FocusableInput";
import { StrictModeExample } from "./components/StrictModeExample";

function App() {
  return (
    <div>
      <FocusableInput />

      <StrictModeExample />

      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
}

export default App;
