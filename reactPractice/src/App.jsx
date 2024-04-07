import { useState, useEffect } from 'react'
import './App.css'
import SignUp from './SignUp'



function App() {

  const getInput = (e) => {
    console.log(e.target.name)
  }
 
const addNums = (num1, num2)=> {
  console.log(num1+num2);
}


 return (
  <div className="outer">
    <SignUp />
  </div>
 )
}

export default App
