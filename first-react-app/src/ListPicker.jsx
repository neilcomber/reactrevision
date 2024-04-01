export default function ListPicker({values = ['beans', 'carrots']}) {

    const randomIndex = Math.floor(Math.random() * values.length)
    const picked = values[randomIndex]

    return(
        <div>
            listed item = {picked}
        </div>
    )
}