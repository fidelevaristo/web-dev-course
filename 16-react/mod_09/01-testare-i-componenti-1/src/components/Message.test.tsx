import { render, screen } from "@testing-library/react";
import { Message } from "./Messge";

describe("Message component", () => {
  it("renders the paragraph", () => {
    render(<Message />);

    expect(screen.getByText(/what a beautiful day!/i)).toBeInTheDocument();
  });
});
