type MessageProps = {
  age: number;
};

export function Message({ age }: MessageProps) {
  return (
    <p>
      {age > 18
        ? `Your age is ${age}`
        : "You are very young!"}
    </p>
  );
}