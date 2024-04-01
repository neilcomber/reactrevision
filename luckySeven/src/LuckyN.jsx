import Dice from "./Dice";
import Button from "./Button";
import { useState } from "react";
import { getRolls } from "./utils";

export default function LuckyN({numDice = 2, winCheck}) {

    const roll = () => Math.floor(Math.random() * 6) + 1;

    const [dice, setDice] = useState(getRolls(numDice));

    const isWinner = winCheck(dice);

    const rollAgain = ()=>{
        setDice(getRolls(numDice))
        
    }
   
    
    return (
        <main className='LuckyN'>
        <h1>Lucky {isWinner && "You Win!"}</h1>
            <Dice dice={dice}/>
            <Button click={rollAgain} label="roll again"/>
        </main>
    )
}