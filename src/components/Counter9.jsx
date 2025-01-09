import { useState } from 'react'

function Counter9() {
    const [count, setCount] = useState(1);

        const handleDecremenet = () => {
            setCount((count) =count -1)
        }
        const handleIncrement = () => {
            setCount((count) = count =1)
        }
    
  return (
    <div>Counter9
        <h1>{count}</h1>
        <button onClick={handleDecremenet}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter9