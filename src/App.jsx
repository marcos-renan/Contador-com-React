import { useState } from 'react'
import './App.css'

function App() {
  const [botao, setBotao] = useState(0)

  function apertarBotao() {
    setBotao(botao + 1)
  }

  return (
    <div>
      <h1>Quantidade de Clicks: {botao}</h1>
      <button onClick={apertarBotao}>Click</button>
    </div>
  )
}

export default App
