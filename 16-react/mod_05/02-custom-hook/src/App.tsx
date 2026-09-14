import { Counter } from "./components/Counter";
import { CurrentLocation } from "./components/CurrentLocation";
import { GithubUser } from "./components/GithubUser";
import { Login } from "./components/Login";

function App() {
  return (
    <main>
      <h1>Custom Hooks</h1>

      <section>
        <h2>useCounter</h2>
        <Counter />
      </section>

      <hr />

      <section>
        <h2>useLoginForm</h2>
        <Login />
      </section>

      <hr />

      <section>
        <h2>useGithubUser</h2>
        <GithubUser username="octocat" />
      </section>

      <hr />

      <section>
        <h2>useCurrentLocation</h2>
        <CurrentLocation />
      </section>
    </main>
  );
}

export default App;
