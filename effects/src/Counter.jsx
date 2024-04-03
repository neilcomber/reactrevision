

import { useState, useEffect } from "react";


export default function Counter() {


    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(function myEffect(){
        console.log('my effect was called');
    }, [name])

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleChange = (e)=> {
        setName(e.target.value)
    }


    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={increment}>+1</button>
            <p>name: {name}</p>
            <input type="text" name="name" value={name} onChange={handleChange}/>
        </div>
    )
}