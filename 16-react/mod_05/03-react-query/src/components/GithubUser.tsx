import { useGithubUser } from "../hooks/useGithubUser";

type GithubUserProps = {
  username: string | null;
};

export function GithubUser({ username }: GithubUserProps) {
  const { user, error, isLoading, isError, refetchGithubUser } =
    useGithubUser(username);

  if (username === null) {
    return <p>Select a Github user</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <div>
        <p>{error instanceof Error ? error.message : "Something went wrong"}</p>

        <button onClick={() => refetchGithubUser()}>Retry</button>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width={120} />

      <h2>{user.name ?? "No name available"}</h2>
      <p>{user.login}</p>

      <button onClick={() => refetchGithubUser()}>Refetch</button>
    </div>
  );
}
