import React, { useState } from "react";

function CounterComp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="counter">{count}</p>
      <button data-testid="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
       <button data-testid="decrement" onClick={() => setCount(count -1)}>
        Increment
      </button>
    </div>
  );
}

export default CounterComp;
