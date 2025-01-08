import React from 'react';

function Counter() {
    const [count, setcount] = useSate(1);
    const handleDecrement = () => {
        setCount((count) => count - 1);
      };
      const handleIncrement = () => {
        setCount((count) => count + 1);
      };
  return (
    <div>
    <h1 className="text-green-600 font-4xl">{count}</h1>
    <button onClick={handleDecrement} disabled={count < 2}>
      Decrement
    </button>
    <button onClick={handleIncrement} disabled={count > 9}>
      Increment
    </button>
  </div>
);

}

export default Counter;