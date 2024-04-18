import axios from 'axios'
import { useState } from 'react'



export default function DeBounce() {

    const [postcode, setPostcode] = useState("");

    const pinAPI = `https://api.postcodes.io/postcodes/${postcode}`

    const searchPin = ()=>{
        axios.get(pinAPI).then((res)=>{
            const data = res.json()
        }).catch((e)=> console.log(e))

    }

    


    return (
        <>
        <h1>De Bounce</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='postcode' value={postcode} onChange={(e)=>{setPostcode(e.target.value)}}/>
        <button type="submit">Submit</button>
        </form>
        </>
    )
}