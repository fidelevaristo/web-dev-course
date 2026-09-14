import { useState } from "react";

type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
};

export function useGithubUser() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUser(username: string) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data: GithubUser = await response.json();

      setUser(data);
    } catch (error) {
      setUser(null);
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    error,
    loading,
    fetchGithubUser,
  };
}
