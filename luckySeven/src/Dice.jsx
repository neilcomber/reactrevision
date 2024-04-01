import Die from "./Die"
import './Dice.css'

export default function Dice({dice, color='slateblue'}){
    
    return <div className="Dice">
        {dice.map((d, i)=> <Die key={i} val={d} color={color}/>)}
    </div>
}