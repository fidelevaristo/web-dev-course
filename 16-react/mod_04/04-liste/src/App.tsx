import { Colors } from "./components/Colors";

function App() {
  const colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
    { id: 4, name: "Yellow" },
    { id: 5, name: "Purple" },
  ];

  return (
    <div>
      <Colors items={colors} />
    </div>
  );
}

export default App;
