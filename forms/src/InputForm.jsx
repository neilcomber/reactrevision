import { useState } from "react"
import { useForm } from "react-hook-form"

export default function InputForm({ addToList}) {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  console.log(watch("item")) // watch input value by passing the name of it
 


    const [formData, setFormData] = useState({
        item: "", 
        quantity: 0
    })

 

  
    const handleInputData = (e)=> {
        setFormData((oldData)=>{
            return {...oldData, [e.target.name]: e.target.value}
        })
    }

    const haveSubmit = (e)=>{
            // e.preventDefault();
            addToList(formData)
            setFormData({
                item: "", 
                quantity: 0
            })
    }

    console.log(errors)
    
    return (
        
        <form onSubmit={handleSubmit(haveSubmit)}>
    <label htmlFor="item">product name</label>
    <input type="text" name="item" {...register("item", { required: "name is required"})} id="item" placeholder="item" value={formData.item} onChange={handleInputData}/>
    {errors.item && <span>product name is required</span>}

    <label htmlFor="quantity">quantity</label>
    <input type="number" name="quantity" id="quantity" placeholder="quantity" value={formData.quantity} onChange={handleInputData}/>
    <button>Add To List</button>
   </form>
        
    )
}