import { useState } from "react";
import "./App.css";
import Hotels from "./components/Hotels/Hotels";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="hotels">
        <Hotels />
      </div>
    </div>
  );
}

export default App;
