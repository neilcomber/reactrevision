import './DoubleDice.css';

export default function DoubleDice() {
    
    const roll = () => Math.floor(Math.random() * 3) + 1;

    const turn1 = roll()
    const turn2 = roll()
    const isWinner = turn1 === turn2;
    const styles = { color: isWinner? "green" : "red"};


    return(
        <div className="DoubleDice" style={styles}>
        <h2>Double Dice</h2>
        {isWinner && <h3>You Win!!</h3>}
        <p>Roll 1 = {turn1}</p>
        <p>Roll 2 = {turn2}</p>
        </div>
    )

}