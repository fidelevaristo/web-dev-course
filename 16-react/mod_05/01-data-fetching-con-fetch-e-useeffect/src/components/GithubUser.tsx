import { useEffect, useState } from "react";

type GithubUserProps = {
  username: string;
};

type User = {
  login: string;
  name: string | null;
  avatar_url: string;
};

export function GithubUser({ username }: GithubUserProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://api.github.com/users/${username}`);

      const data = await response.json();

      setUser(data);
    }

    fetchUser();
  }, [username]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width={120} />

      <h2>{user.name}</h2>

      <p>{user.login}</p>
    </div>
  );
}
