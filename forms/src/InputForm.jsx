import { useState } from "react"

export default function InputForm({ addToList}) {

    const [formData, setFormData] = useState({
        item: "", 
        quantity: 0
    })

    const [productIsValid, setProductIsValid] = useState(false);

  
    const handleInputData = (e)=> {
        setFormData((oldData)=>{
            return {...oldData, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e)=>{
            e.preventDefault();
            addToList(formData)
            setFormData({
                item: "", 
                quantity: 0
            })
    }

    
    return (
        
        <form onSubmit={handleSubmit}>
    <label htmlFor="item">product name</label>
    <input type="text" name="item" id="item" placeholder="item" value={formData.item} onChange={handleInputData}/>
    {!productIsValid && <p style={{color: "red"}}>Product name cannot be empty</p>}
    <label htmlFor="quantity">quantity</label>
    <input type="number" name="quantity" id="quantity" placeholder="quantity" value={formData.quantity} onChange={handleInputData}/>
    <button>Add To List</button>
   </form>
        
    )
}