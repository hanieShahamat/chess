import { useState } from 'react'
import Square from './Square'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Square/>
    </>
  )
}

export default App
