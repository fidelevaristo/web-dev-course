import { useState } from "react";

export function TodoList() {
  const [items, setItems] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  function handleAddTodo() {
    if (todo.trim() === "") return;

    setItems((currentItems) => [...currentItems, todo]);

    // Svuota l'input
    setTodo("");
  }

  function handleReset() {
    setItems([]);
  }

  function handleRemove(index: number) {
    setItems((currentItems) => currentItems.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Add a todo..."
      />

      <button onClick={handleAddTodo}>Add</button>

      <button onClick={handleReset}>Reset</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
