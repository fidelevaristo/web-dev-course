import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { Login } from "./components/Login";

function App() {
  function handleLogin(data: {
    username: string;
    password: string;
    remember: boolean;
  }) {
    console.log(data);
  }

  return (
    <>
      <InteractiveWelcome />

      <hr />

      <Login onLogin={handleLogin} />
    </>
  );
}

export default App;
