import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  function increaseCount() {
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count - 1)
  }
  function resetCount() {
    setCount(0)
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>
        Increase Count
      </button>
      <button onClick={decreaseCount}>
        Decrease Count
      </button>
      <button onClick={resetCount}>
        Reset Count
      </button>
    </>
    
  )
}

export default App
