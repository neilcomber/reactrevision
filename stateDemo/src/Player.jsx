export default function player({num, score, addOne, playTo}){


    return (
        <li>Player {num}: {score} <button onClick={()=> {addOne(num - 1)}}>+1</button>{score >= playTo && <span>WINNER</span>}</li>
    )
}