import { useState } from "react";

function ClickMe() {
  const [n, setN] = useState(0);

  const increment = () => {
    setN(n + 1);
  };

  const decrement = () => {
    setN(n - 1);
  };

  const reset = () => {
    setN(0);
  };

  return (
    <div>
      <h1>Clicked {n}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>

      <h1>Clicked {n}</h1>
    </div>
  );
}

export default ClickMe;
