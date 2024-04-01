import { useState } from "react";
import { v4 as uuid } from 'uuid';
import InputForm from "./InputForm";

export default function ShoppingListForm() {

const [list, setList] = useState([]);


const addToList = (formData) => {
   
    setList((oldList)=>{
        
        return [...oldList, {...formData, id: uuid()}]
    })
}

    return (
        <>
        <h1>Shopping List</h1>
        <ul>
            {list.map((item)=> <li key={item.id}>{item.item} - {item.quantity}</li>)}
        </ul>

        <InputForm addToList={addToList}/>

   </>
    )
}