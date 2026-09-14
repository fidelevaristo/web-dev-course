import { useLoginForm } from "../hooks/useLoginForm";

export function Login() {
  const { form, handleChange, resetForm } = useLoginForm();

  function handleSubmit() {
    console.log(form);
  }

  return (
    <div>
      <input
        name="username"
        type="text"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button
        onClick={handleSubmit}
        disabled={!form.username || !form.password}
      >
        Login
      </button>

      <button onClick={resetForm}>Reset</button>
    </div>
  );
}
