import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type GithubUserPreview = {
  id: number;
  login: string;
};

export default function GithubUserList() {
  const [users, setUsers] = useState<GithubUserPreview[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://api.github.com/users");

        if (!response.ok) {
          throw new Error("Errore durante il recupero degli utenti");
        }

        const data: GithubUserPreview[] = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.login}`}>{user.login}</Link>
        </li>
      ))}
    </ul>
  );
}
