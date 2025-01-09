import { useState } from 'react'

function Counter11() {
    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        setCount((count) = count -1)
    }
    const handleIncrement =() => {
        setCount((count) = count +1)
    }
  return (
    <div>Counter11
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter11