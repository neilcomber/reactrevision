import { useState } from 'react'
import GithubSearch from './GithubSearch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GithubSearch/>
    </>
  )
}

export default App
