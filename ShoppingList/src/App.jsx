import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShoppingList from './ShoppingList'
// import Clicker2 from './Cilcker2'
import Form from './Form'
import './App.css'
import Clicker2 from './Clicker2'
import Counter from './Counter'
import Face from './Face'

const list = [
  {id: 1, item: 'eggs', quantity: 12, completed: true},
  {id: 2, item: 'beans', quantity: 2, completed: false},
  {id: 3, item: 'crisps', quantity: 8, completed: true},
  {id: 4, item: 'milk', quantity: 1, completed: false},
]

function App() {


  return (
    <>
      <div>
     
       <Face />
  
      </div>
    </>
  )
}

export default App
