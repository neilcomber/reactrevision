import { useState } from 'react'

import './App.css'

function App() {

  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')

  const incrementHours = () => {
    setHours((prevHours)=>{
      if (Number(prevHours) === 23) {
        return '00'
      } else {
        return ((Number(prevHours) + 1).toString()).padStart(2, '0')
      }
    })
  }

  const decrementHours = () => {
    setHours((prevHours)=>{
      if (Number(prevHours) === 0) {
        return '23'
      } else {
        return ((Number(prevHours) - 1).toString()).padStart(2, '0')
      }
    })
  }

  const incrementMinutes = () => {
    setMinutes((prevMinutes)=>{
      if (Number(prevMinutes) === 59) {
        return '00'
      } else {
        return ((Number(prevMinutes) + 1).toString()).padStart(2, '0')
      }
    })
  }

  const decrementMinutes = () => {
    setMinutes((prevMinutes)=>{
      if (Number(prevMinutes) === 0) {
        return '59'
      } else {
        return ((Number(prevMinutes) - 1).toString()).padStart(2, '0')
      }
    })
  }

  return (
    <>
      <div className="clock">
        <button className="button" onClick={incrementHours}>&uarr;</button>
        <button className="button" onClick={incrementMinutes}>&uarr;</button>
        <div className="time"><div>{hours}</div><div>:</div><div>{minutes}</div></div>
        <button className="button" onClick={decrementHours}>&darr;</button>
        <button className="button" onClick={decrementMinutes}>&darr;</button>
      </div>
    </>
  )
}

export default App
