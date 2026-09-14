import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <Welcome name={name} />
    </div>
  );
}