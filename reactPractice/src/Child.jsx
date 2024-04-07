import { useState } from 'react'

export default function Child({name, changeName}){

const [text, setText] = useState("");

    return (
        <div>
            <h1>Hello {name}</h1>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={()=>{changeName(text)}}>change name</button>
        </div>
    )
}