import { useState } from "react";
import "./App.css";
import Hotels from "./components/Hotels/Hotels";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Hotels />

      <div className="center">
        <p>something</p>
      </div>
    </div>
  );
}

export default App;
