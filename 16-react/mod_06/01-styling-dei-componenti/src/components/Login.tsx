import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const isPasswordValid = password.length >= 8;

  return (
    <div>
      <h2>Controlled Login</h2>

      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />

      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
          style={{ width: "auto", marginRight: "8px" }}
        />
        Remember me
      </label>

      <br />
      <br />

      <button
        style={{
          background: isPasswordValid
            ? "linear-gradient(135deg, #22c55e, #16a34a)"
            : "linear-gradient(135deg, #ef4444, #b91c1c)",
          color: "white",
          boxShadow: isPasswordValid
            ? "0 12px 30px rgba(34, 197, 94, 0.3)"
            : "0 12px 30px rgba(239, 68, 68, 0.3)",
        }}
      >
        Login
      </button>
    </div>
  );
}
