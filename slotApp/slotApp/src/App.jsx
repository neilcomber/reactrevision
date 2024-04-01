import { useState } from 'react'
import Slots from './Slots'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Slots val1="🐱" val2="🐱" val3 ="🐱"/>
     <Slots val1="🐭" val2="🐯" val3 ="🐱"/>
    </>
  )
}

export default App
