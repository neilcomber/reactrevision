import { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users/'

export default function UserCards() {
    const [data, setData] = useState([])
    const [toShow, setToShow] = useState(data)
  
    const getData = async ()=> {
      const response = await fetch(url);
      const data = await response.json();
       setData(data)
       setToShow(data)
    }
  
  
    useEffect(()=>{
      getData()
    }, [url])
  
    const handleSearch = ()=>{
      console.log('bin')
      setToShow(data.filter((rec)=> rec.name[0].toLowerCase() === 'c'))
      
    }
  
    return (
      <div className="outer">
    <h1 className="heading">React Practice</h1>
    <div className="container">
      {toShow.map((record) => {
       return <div className="card"key={record.id}><div><b>Name: </b>{record.name}<br /> <b>email: </b>{record.email}</div></div>
      })}
    </div>
    <button onClick={handleSearch}>See only names starting with C</button>
    <button onClick={()=>{setToShow(data)}}>See all names</button>
      </div>
    )
}