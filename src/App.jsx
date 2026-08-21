import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  function increaseCount() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>
        Increase Count
      </button>
    </>
    
  )
}

export default App
