import { useState, useEffect } from "react"
import axios from "axios"

const url = 'https://661b705565444945d04f7de8.mockapi.io/api/neils/users'


export default function Rest() {

   const [info, setInfo] = useState([])
   const [name, setName] = useState("")

   const getData = async ()=>{
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json()
        setInfo(data)
   
    } catch(e){
    }
};

    useEffect(()=>{
        // get request
        
        getData()

    }, [])
    
 

    const postData = (e) => {
        e.preventDefault();
        axios.post(url, {
            name: name, 
        }).then((res)=> {
            getData();
        }).catch((err)=>{
            console.log(err)
        })
        setName("")
       
    }

    const updateData = (id)=>{
        axios.put(`${url}/${id}`, {
            name: name
        }, id).then((res)=> {
            getData();
        }).catch((err)=>{
            console.log(err)
        })
        
       
    }

    const deleteData = (id) => {
        axios.delete(`${url}/${id}`).then((res)=> {
            getData()
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
        <h1>Restful React</h1>
        <form action="" onSubmit={postData}>
            <input type="text" placeholder="name" name="name" value={name} onChange={e=> setName(e.target.value) }/>
            <button className="button" >Post Data</button>
        </form>
        <ul>
            {info.map(user => <li key={user.id}>
                {user.id}.{user.name}
                 <button className="button" onClick={()=> updateData(user.id)}>Update</button>
                 <button className="button" onClick={()=> deleteData(user.id)}>Delete</button>

                 </li>)}
        </ul>
        
        </>
    )
}