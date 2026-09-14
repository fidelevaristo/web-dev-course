export function UncontrolledLogin() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log({
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-700 bg-slate-950/80 p-8 shadow-2xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">Uncontrolled Login</h2>

      <input
        name="username"
        placeholder="Username"
        className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-400"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-400"
      />

      <label className="mb-6 flex items-center gap-3 text-slate-300">
        <input name="remember" type="checkbox" className="w-auto " />
        Remember me
      </label>

      <button className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500">
        Login
      </button>
    </form>
  );
}
