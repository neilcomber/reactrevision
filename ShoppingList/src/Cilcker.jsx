function handleClick() {
    console.log('YOU CLICKED BITCH!!!!')
}

function hover() {
    console.log('get off me!')
}

export default function Clicker(){
    return(
    <div>
        <p onMouseOver={hover}>Click the button</p>
        <button onClick={handleClick}>click me</button>
    </div>
    )
}