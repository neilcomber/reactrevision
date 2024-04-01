export default function ColorList({colors}) {

    return (
        <div>
            <h1>Colour List</h1>
            <ul>
            {colors.map((c) => <li id={c} style={{color: c}}>{c}</li>)}
            </ul>
        </div>
    )

    }
