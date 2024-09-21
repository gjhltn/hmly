import { useState } from 'react'
import './App.css'
import { Home } from './Home'
import { Overlay } from './Overlay'
import { SimulationMonitor } from './SimulationMonitor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SimulationMonitor />
    <div class="box">
        <Home />
        <Overlay />
    </div>
    </>
  )
}

export default App
