import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser.tsx";

export default function ShowGithubUser() {
  const { username } = useParams<{ username: string }>();

  if (!username) {
    return <p>Nessun utente selezionato</p>;
  }

  return <GithubUser username={username} />;
}
