import { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [array, setArray] = useState([1]);
    const [text, setText] = useState("");

    const handleText = (e)=>{
        setText(e.target.value)
        console.log(text)
    }

    const addToArray = (e) => {
        e.preventDefault()
        setArray((prevArray) => {
           return [...prevArray, text]
        })
    }


    return(
        <div>
            Counter: {count}
            <button onClick={()=>{setCount(count+1)}}>+1</button>
            <button onClick={()=>{setCount(count-1)}}>+1</button>
            <button onClick={()=>{setIsVisible(!isVisible)}}>{ isVisible ? 'hide paragraph' : 'show paragraph' }</button>
            {isVisible && <p>Here is a hiding Paragraph</p>}
            <input type="text" value={text} placeholder="type in here" name="textForArray" onChange={handleText}/>
            <button onClick={addToArray}>Add to array</button>
            <ul>{array.map((str, idx) => <li key={idx}>{str}</li>)}</ul>
        </div>
        
    )
}