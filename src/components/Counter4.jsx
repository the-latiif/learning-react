import { useState } from 'react'

function Counter4() {
    const [count, setCount] = useState(1);

    const handleDecremenet = () => {
        setCount((count) => count -1)
    }
    const handleincremnet =() => {
        setCount ((count) => count +1)
    }
  return (
    <div>Counter4
        <h1>{count}</h1>
        <button onClick={handleDecremenet}>Decrement</button>
        <button onClick={handleincremnet}>Increment</button>
    </div>
  )
}

export default Counter4