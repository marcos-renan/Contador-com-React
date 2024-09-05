import { useState } from 'react'
import './App.css'

function App() {
  const [click, setClick] = useState(0)

  function apertarClick() {
    setClick(prevClick => prevClick + 1)
  }

  return (
    <div>
      <h1>Quantidade de Clicks: {click}</h1>
      <button onClick={apertarClick}>Click</button>
    </div>
  )
}

export default App
