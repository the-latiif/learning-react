import { useState } from "react"; 

function Counter8() {
    const {count, setcount} = useState(1);

    const handleDecrement = () => {
        setcount((count) = count -1)
    }
    const handleIncrement = () => {
        setcount ((count) = count +1)
    }
  return (
    <div>Counter8
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter8