import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="app">

      <div className="counter-card">

        <h1>MY COUNTER</h1>

        <p className="text">
          
        </p>

        <div className="number">
          {counter}
        </div>

        <div className="buttons">

          <button className="increase" onClick={increase}>
            Increase
          </button>

          <button className="decrease" onClick={decrease}>
             Decrease
          </button>

          <button className="reset" onClick={reset}>
            ↻ Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;