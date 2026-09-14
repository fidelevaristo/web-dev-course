import { useQuery } from "@tanstack/react-query";

type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
};

async function fetchGithubUser(username: string): Promise<GithubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("Github user not found");
  }

  return response.json();
}

export function useGithubUser(username: string | null) {
  const {
    data: user,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["github-user", username],
    queryFn: () => fetchGithubUser(username!),
    enabled: username !== null,
  });

  return {
    user,
    error,
    isLoading,
    isError,
    refetchGithubUser: refetch,
  };
}
