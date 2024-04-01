import { useState } from "react";
import "./Box.css"

export default function({colour}) {


const randomColour = ()=> colour[Math.floor(Math.random()*colour.length)]

const [boxColour, setBoxColour] = useState(randomColour)

function handleClick(){
    setBoxColour(randomColour)
}

const style = {
    
    backgroundColor: boxColour,
}
   return <div className="box" style={style} onClick={handleClick}></div>
}