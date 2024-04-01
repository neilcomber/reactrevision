import "./Button.css"

export default function Button({click, label = 'click me'}) {
    return <button className="Button" onClick={click}>{label}</button>
}