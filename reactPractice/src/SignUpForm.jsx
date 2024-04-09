import { useState } from 'react';
import './SignUpForm.css'

export default function SignUpForm({handleSubmit}) {

    const initialiseData = {id: "", firstName: "", lastName: "", email: "", password: "", age: 0}

    const [formData, setFormData]  = useState(initialiseData)

    const handleInput = (name, value) => {
        setFormData((prevData) => ({...prevData, [name]: value}))
        
    }

    const readySubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData)
        setFormData(initialiseData)
    }

    return (
        <form className="form" action="" onSubmit={readySubmit}>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" name="age" value={formData.age} onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={formData.password} onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        <button type="submit">Submit</button>
        <button type="reset" onClick={()=>{setFormData(initialiseData)}}>Reset</button>
    </form>
    )
}

