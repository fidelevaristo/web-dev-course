import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.tsx";
import Counter from "./components/Counter.tsx";
import GithubUsers from "./components/GithubUsers.tsx";
import ShowGithubUser from "./components/ShowGithubUser.tsx";
import NotFound from "./components/NotFound.tsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> <Link to="/counter">Counter</Link>{" "}
        <Link to="/users">GitHub Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Fidel" />} />

        <Route path="/counter" element={<Counter />} />

        <Route path="/users" element={<GithubUsers />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
