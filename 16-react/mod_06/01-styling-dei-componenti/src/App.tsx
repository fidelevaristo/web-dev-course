import { Clock } from "./components/Clock";
import { Counter } from "./components/Counter";
import { FocusableInput } from "./components/FocusableInput";
import { Login } from "./components/Login";
import { UncontrolledLogin } from "./components/UncontrolledLogin";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <main>
      <h1 className="app-title">React Styling Lab</h1>

      <div className="grid">
        <section className="card">
          <Welcome name="Fidel" />
        </section>

        <section className="card">
          <Counter initialValue={0} incrementAmount={1} />
        </section>

        <section className="card">
          <Login />
        </section>

        <section className="card">
          <Clock />
        </section>

        <section className="card">
          <UncontrolledLogin />
        </section>

        <section className="card">
          <FocusableInput />
        </section>
      </div>
    </main>
  );
}

export default App;
