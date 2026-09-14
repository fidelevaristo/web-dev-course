import { useEffect } from "react";
import { useGithubUser } from "../hooks/useGithubUser";

type GithubUserProps = {
  username: string;
};

export function GithubUser({ username }: GithubUserProps) {
  const { user, error, loading, fetchGithubUser } = useGithubUser();

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width={120} />

      <h2>{user.name ?? "No name available"}</h2>

      <p>{user.login}</p>
    </div>
  );
}
