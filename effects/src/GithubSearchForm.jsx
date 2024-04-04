import { useState } from "react";

export default function GithubSearchForm({search}) {

    const [name, setName] = useState("")

    const handleChange= (e)=> {
        setName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        search(name);
        setName("")
        
    }

    return (
        <div>
    <h3>Search Form</h3>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange}/>
        <button>Search</button>
    </form>
    </div>
    )
}