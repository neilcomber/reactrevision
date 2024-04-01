export default function Slots({val1, val2, val3}) {
    const hasWon = val1 === val2 && val1 === val3
    const color = hasWon ? 'green' : 'red'
    return (
        <div>
        <h1>{val1} {val2} {val3}</h1>
        <h2 style={{color}}>{hasWon ? 'You Win!' : 'You Lose!'}</h2>
        {hasWon && <h3>Congrats!</h3>}
        </div>
    )
}