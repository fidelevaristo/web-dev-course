import { Welcome } from "./components/Welcome";

export function App() {
  return (
    <div>
      <Welcome name={<strong>Fidel</strong>} age={27} />
    </div>
  );
}
