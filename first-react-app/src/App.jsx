import { useState } from 'react'

import Greeter from './greeter.jsx'
import ListPicker from './ListPicker.jsx'
import DoubleDice from './DoubleDice.jsx'
import Heading from './Heading.jsx'
import ColorList from './ColorList.jsx'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Heading color="magenta" text="Here is my Heading nonce" fontSize="20px"/> */}
    {/* <Heading color="blue" text="Here is my Heading" fontSize="40px"/>
    <Heading color="teal" text="Here nonce"/> */}
  {/* <DoubleDice/>
  <DoubleDice/> */}
  <ColorList colors={["red", "blue", "pink", "green", "orange"]}/>
  {/* <ListPicker values={[1,2,3,4,5,]}/> */}
     
    </>
  )
}

export default App
