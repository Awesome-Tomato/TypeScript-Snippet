import { Button } from "./components/Button/Button";
import Title from "./components/Title/Title";
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev+1);
  const decrease = () => setCount(prev => prev-1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <Title>Counter</Title>
      <div>
        <span>{count}</span>
      </div>
      <Button onClick={decrease}> DECREASE</Button>
      <Button onClick={reset}>RESET</Button>
      <Button onClick={increase}>INCREASE</Button>
    </div>
  );
}

export default App;
