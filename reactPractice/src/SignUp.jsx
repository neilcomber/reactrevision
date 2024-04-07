import { useState } from 'react';
import './SignUp.css'
import SignUpForm from './SignUpForm';

export default function SignUp() {

    const [users, setUsers] = useState([{ id: 1, firstName: 'neil', lastName: 'Comber', email: 'neilcomber@gmail.com', password: 'bintime'}])

    

    const handleSubmit = (formData)=> {
        setUsers((prevUsers)=>{
            return [...prevUsers, {...formData, id: crypto.randomUUID()}]
        })
        
    }
    return (
        <div>
            
            <h1>Signup Form</h1>
           <SignUpForm handleSubmit={handleSubmit}/>
            <div className="container">{users.map(user => <div key={user.id} className="card">
                <div className="innerCard"><b>Name</b> {user.firstName} {user.lastName}</div>
                <div className="innerCard"><b>Age</b> {user.age}</div>
                <div className="innerCard"><b>Email:</b> {user.email}</div>
                <div className="innerCard"><b>Password: </b>{user.password.replace(/./g, '*')}</div>
            </div>)}</div>
        </div>
    )
}