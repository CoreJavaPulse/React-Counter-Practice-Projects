import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount((previousCount) => previousCount + 1)
  }

  function decreaseCount() {
    setCount((previousCount) => {
      if (previousCount === 0) {
        return 0
      }

      return previousCount - 1
    })
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <main className="app">
      <section className="counter-card">
        <h1>Counter</h1>

        <p className="count-label">Current count</p>
        <p className="count-value">{count}</p>

        <div className="button-row">
          <button className="increase-button" onClick={increaseCount}>
            Increase
          </button>

          <button className="decrease-button" onClick={decreaseCount}>
            Decrease
          </button>

          <button className="reset-button" onClick={resetCount}>
            Reset
          </button>
        </div>
      </section>
    </main>
  )
}

export default App