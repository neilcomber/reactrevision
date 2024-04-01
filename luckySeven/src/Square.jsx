import './Square.css'
import { useState } from 'react'

export default function Square({isActive, handleClick}){

  

    return <div className="Square" style={{backgroundColor: isActive ? "red" : 'white' }} onClick={handleClick}></div>

}