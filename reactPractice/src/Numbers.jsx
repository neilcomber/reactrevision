import { useState } from 'react'

export default function Numbers() {

    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);

    const handleClick = ()=>{
        const filtered = numbers.filter(num => num <= 5)

        setNumbers(filtered.map(num => num * num))
    }
    
 return (
    <div className="outer">
        <h1 className="heading">Numbers</h1>
        <div className="container">
        {numbers.map((num, idx) => <div className="card" key={idx}>{num}</div>)}
        </div>
        <button onClick={handleClick}>Squared list</button>
    </div>
 )
}