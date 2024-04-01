function handleClick(message) {
    alert(message)
}

export default function Clicker2({text, message}) {
    return (
        <button onClick={()=>handleClick(message)}>{text}</button>
    )
}