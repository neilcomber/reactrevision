import './Die.css'

export default function Die({val = 6, color='slateblue'}){
    return <div className="Die" style={{backgroundColor: color}}>
        {val}
    </div>
}