import { useState } from "react"



export default function Counter(){
    const [count, setCount] = useState(0);

    return(
    <div>
    <button onClick={()=>{setCount(count+1)}}>click me</button>
    <p>number of clicks {count}</p>
    </div>
    )
}