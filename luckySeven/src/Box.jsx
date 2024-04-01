import Square from "./Square";
import { useState } from 'react';
import './Box.css';

export default function Box({size = 9}){

    const [boxes, setBoxes] = useState(new Array(size).fill(false))

    const toggleBox= (i) => {
        
        setBoxes(oldBoxes => oldBoxes.map((el,ind)=> {
            if(i === ind) {
                return !el
            } else {
                return el
            }
        }))
    }
    const reset = ()=>{
        setBoxes(new Array(size).fill(false))
    }

    return <div className="box">
        {boxes.map((el, i)=><Square key={i} isActive={el} handleClick={()=>toggleBox(i)}/>)}
        <button onClick={reset}>Reset</button>
    </div>
}