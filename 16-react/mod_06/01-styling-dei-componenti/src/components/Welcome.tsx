type WelcomeProps = {
  name: string;
};

export function Welcome({ name }: WelcomeProps) {
  return <p className="welcome">Welcome, {name}!</p>;
}
