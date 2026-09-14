import { useState } from "react";

type LoginProps = {
  onLogin: (data: {
    username: string;
    password: string;
    remember: boolean;
  }) => void;
};

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleLogin() {
    onLogin({
      username,
      password,
      remember,
    });
  }

  function handleReset() {
    setUsername("");
    setPassword("");
    setRemember(false);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={(event) =>
            setRemember(event.target.checked)
          }
        />
        Remember me
      </label>

      <button
        onClick={handleLogin}
        disabled={!username || !password}
      >
        Login
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}