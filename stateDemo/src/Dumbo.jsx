import { useState } from "react";

function generateGameboard(){
    console.log('make gameboard');
   return Array(5000);
}

export default function Dumbo() {

    const [board, setBoard] = useState(generateGameboard);

    

    return (
        <button>Click to change</button>
    )
}