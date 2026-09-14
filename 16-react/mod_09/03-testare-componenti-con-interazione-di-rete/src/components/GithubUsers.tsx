import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

type User = {
  id: number;
  login: string;
};

export function GithubUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://api.github.com/users");

      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedUser(user.login)}>
              {user.login}
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}
