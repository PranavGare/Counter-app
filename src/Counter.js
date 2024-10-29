import React, { useState } from 'react';
import './Counter.css'; 

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter: {count}</h1>
      <div className="button-group">
        <button className="counter-button increment" onClick={increment}>+</button>
        <button className="counter-button decrement" onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
