import { useState } from 'react'
import './Face.css'

export default function Face() {
    
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0)

    const toggle = ()=> {
        setIsHappy(!isHappy)
        setCount(count+1)
    }

    const mood = isHappy ? "😃" : "😟"

    return (
        <div>
    <button className="Face" onClick={toggle}>{mood}</button>
    <p>{count}</p>
    </div>
    )
}