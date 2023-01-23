import { useState } from "react";
import "./App.css";
import Hotels from "./components/Hotels/Hotels";
import Trip from "./components/Trip/Trip";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Hotels />

      <Trip />
    </div>
  );
}

export default App;
