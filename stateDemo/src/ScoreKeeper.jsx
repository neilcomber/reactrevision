import { useState } from "react";

import Player from "./Player";

export default function ScoreKeeper({players=3, playTo=5}) {

    const [scores, setScores] = useState(new Array(players).fill(0))


    const addOne = (index) => {
        if(!scores.includes(playTo)){
        setScores((preScores) => {
            return scores.map((s,i)=> {
            if (i === index) {
                return s + 1
            } else {
                return s 
            }
        })})
    }
    }

    const resetScores = () => {
        setScores((scores) => scores.map(s => 0))
    }
return (
    <div>
        <h1>Keeping Score</h1>
        <ul>
            {scores.map((s, i)=> <Player key={i} num={i+1} score={s} addOne={addOne} playTo={playTo}/>)}
        </ul>
        <button onClick={resetScores}>Reset</button>
    </div>
)
}