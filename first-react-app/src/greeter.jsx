export default function Greeter({name, from = 'nowhere'}) {
   
    return (
        <div>
    <h1>Hello {name}!!!</h1>
    <h2>from {from}</h2>
    </div>
    )
}