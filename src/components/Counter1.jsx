import { useState } from 'react'

function Counter1() {
  const [count, setCount] = useState(1);
  const handleDecremenet = ( ) => {
    setCount((count) => count -1)
  }

  const handleIncrement = ( ) => {
    setCount((count) => count +1 )
  }
  return (
    <div>Counter1
      <h1>{count}</h1>
      <button onClick={handleDecremenet} disabled={count < 1 }>Decremenet</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}





export default Counter1