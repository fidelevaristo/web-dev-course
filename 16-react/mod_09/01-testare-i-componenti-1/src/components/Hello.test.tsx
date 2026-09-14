import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

describe("Hello component", () => {
  it("renders the heading", () => {
    render(<Hello />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /hello, world!/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the Message component", () => {
    render(<Hello />);

    expect(screen.getByText(/what a beautiful day!/i)).toBeInTheDocument();
  });
});
