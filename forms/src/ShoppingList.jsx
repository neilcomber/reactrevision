import { useState } from "react";
import InputForm from "./InputForm";

export default function ShoppingListForm() {

const [list, setList] = useState([]);


const addToList = (formData) => {
   
    setList((oldList)=>{
        
        return [...oldList, formData]
    })
}

    return (
        <>
        <h1>Shopping List</h1>
        <ul>
            {list.map((item, idx)=> <li key={idx}>{item.item} - {item.quantity}</li>)}
        </ul>

        <InputForm addToList={addToList}/>

   </>
    )
}