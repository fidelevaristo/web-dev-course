import type { FormEvent } from "react";
import { fetchUser } from "../store/fetchUser";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeUser } from "../store/usersSlice";
import { useState } from "react";

export default function ReduxGithubUsers() {
  const [username, setUsername] = useState("");

  const dispatch = useAppDispatch();

  const { users, loading, error } = useAppSelector((state) => state.users);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedUsername = username.trim();

    if (!trimmedUsername) return;

    dispatch(fetchUser(trimmedUsername));

    setUsername("");
  }

  return (
    <section>
      <h2>GitHub Users</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="GitHub username"
          onChange={(event) => setUsername(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Fetch user"}
        </button>
      </form>

      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> @{user.login}
            <button type="button" onClick={() => dispatch(removeUser(user.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
