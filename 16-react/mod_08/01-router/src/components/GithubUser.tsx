import { useEffect, useState } from "react";

type GithubUserProps = {
  username: string;
};

type GithubUserData = {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
};

export default function GithubUser({ username }: GithubUserProps) {
  const [user, setUser] = useState<GithubUserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error("Utente non trovato");
        }

        const data: GithubUserData = await response.json();

        setUser(data);
      } catch (error) {
        setUser(null);
        setError(
          error instanceof Error
            ? error.message
            : "Errore sconosciuto"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  if (loading) {
    return <p>Loading user...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <article>
      <h2>{user.name ?? user.login}</h2>

      <img src={user.avatar_url} alt={user.login} width="120" />

      <p>@{user.login}</p>

      <a href={user.html_url} target="_blank" rel="noreferrer">
        View GitHub profile
      </a>
    </article>
  );
}