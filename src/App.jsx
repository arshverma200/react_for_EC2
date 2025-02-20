import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Hello World
      </h1>
      <h2>My React Js App Host on EC2</h2>
      <p>Deploy by Arsh</p>
    </div>
  )
}

export default App
