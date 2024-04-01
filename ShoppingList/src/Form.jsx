function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
   

}

export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <button>Submit</button>
        </form>
    )
}