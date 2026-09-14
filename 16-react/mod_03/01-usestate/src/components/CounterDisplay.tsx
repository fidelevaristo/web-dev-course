type CounterDisplayProps = {
  count: number;
};

export function CounterDisplay({ count }: CounterDisplayProps) {
  return <h2>{count}</h2>;
}