import { useState } from 'react'
import LuckyN from './LuckyN'
import { sum } from './utils'
import Box from './Box'
import './App.css'

function lessThan4(dice) {
  return sum(dice) < 4;
}

function sameNum(dice) {
  return dice.every((v) => v === dice[0])
}


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      
    <Box />
    
    </>
  )
}

export default App
