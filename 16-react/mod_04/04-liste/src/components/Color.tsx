type ColorProps = {
  name: string;
};

export function Color({ name }: ColorProps) {
  return <li>{name}</li>;
}