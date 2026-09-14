type WelcomeProps = {
  name: string;
};

export function Welcome({ name }: WelcomeProps) {
  return <h2>Welcome, {name || "Guest"}!</h2>;
}