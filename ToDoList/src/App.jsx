import { useState } from 'react'
import ToDoList from './ToDoList'
import CssBaseline from "@mui/material/CssBaseline"
import NavBar from './NavBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <CssBaseline />
      <ToDoList />
    </>
  )
}

export default App
