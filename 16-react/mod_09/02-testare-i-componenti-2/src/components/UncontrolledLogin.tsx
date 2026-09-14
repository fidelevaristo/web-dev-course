export function UncontrolledLogin() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    console.log({
      username,
      password,
      remember,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>

      <div>
        <label htmlFor="remember">
          <input id="remember" name="remember" type="checkbox" />
          Remember me
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
