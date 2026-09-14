import type { ReactNode } from "react";
import { Age } from "./Age";

type WelcomeProps = {
  name?: ReactNode;
  age: number;
};

export function Welcome({ name = "Guest", age }: WelcomeProps) {
  return (
    <>
      <p>Welcome, {name}!</p>
      <Age age={age} />
    </>
  );
}
