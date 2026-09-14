import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { GithubUser } from "./GithubUser";

describe("GithubUser", () => {
  beforeEach(() => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        login: "octocat",
        name: "The Octocat",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
      }),
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading initially", () => {
    render(<GithubUser username="octocat" />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders the fetched user", async () => {
    render(<GithubUser username="octocat" />);

    expect(await screen.findByText("The Octocat")).toBeInTheDocument();

    expect(screen.getByText("octocat")).toBeInTheDocument();

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://github.com/images/error/octocat_happy.gif",
    );

    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://api.github.com/users/octocat",
    );
  });
});
