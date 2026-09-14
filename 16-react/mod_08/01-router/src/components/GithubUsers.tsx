import { Outlet } from "react-router-dom";
import GithubUserList from "./GithubUserList";

export default function GithubUsers() {
  return (
    <section>
      <h1>GitHub Users</h1>

      <GithubUserList />

      <Outlet />
    </section>
  );
}
