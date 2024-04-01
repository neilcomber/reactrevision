import { useState } from "react"
import "./SignupForm.css"

export default function UsernameForm() {

   const initialFormData = {
        firstName: "", 
        lastName: "",
        password: "",
    }

    const [formData, setFormData] = useState(initialFormData)
    
    const updateData = (e)=> {
        setFormData((currentData)=>{
            
            return { ...currentData, [e.target.name]: e.target.value}
        })
    }
    
    return (
        <div>
            <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="first name" value={formData.firstName} onChange={updateData}/>
            </div>
            <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="last name" value={formData.lastName} onChange={updateData}/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="password" value={formData.password} onChange={updateData}/>
            </div>
            <button>Submit</button>
        </div>
    );
}