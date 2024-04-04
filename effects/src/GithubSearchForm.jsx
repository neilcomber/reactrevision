import { useState } from "react";

export default function GithubSearchForm() {

    const [name, setName] = useState("")

    return (
        <div>
    <h3>Search Form</h3>
    <form action="" onSubmit={()=>{handleSubmit}}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </form>
    </div>
    )
}