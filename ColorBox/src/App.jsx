import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Box from './Box'
import ColourBoxGrid from './ColourBoxGrid'
import './App.css'



function App() {

  const colour = ['blue', 'yellow', 'brown', 'green', 'gold', 'purple', 'orange', 'magenta']

 
  return (
   
     <ColourBoxGrid colour={colour}/>
      
    
   
  )
}

export default App
