import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UncontrolledLogin } from "./UncontrolledLogin";

describe("UncontrolledLogin", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders all form fields", () => {
    render(<UncontrolledLogin />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("submits the form with the correct values", async () => {
    const user = userEvent.setup();

    render(<UncontrolledLogin />);

    await user.type(screen.getByLabelText(/username/i), "Fidel");
    await user.type(screen.getByLabelText(/password/i), "123456");
    await user.click(screen.getByLabelText(/remember me/i));
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(console.log).toHaveBeenCalledWith({
      username: "Fidel",
      password: "123456",
      remember: true,
    });
  });
});
