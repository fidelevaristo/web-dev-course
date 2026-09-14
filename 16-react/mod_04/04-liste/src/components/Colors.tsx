import { Color } from "./Color";

type ColorItem = {
  id: number;
  name: string;
};

type ColorsProps = {
  items: ColorItem[];
};

export function Colors({ items }: ColorsProps) {
  return (
    <ul>
      {items.map((color) => (
        <Color
          key={color.id}
          name={color.name}
        />
      ))}
    </ul>
  );
}