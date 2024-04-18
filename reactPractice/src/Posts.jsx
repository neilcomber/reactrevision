import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/posts/'

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        const getData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error (`error ${response.status}`)
                }
                const data = await response.json()
                setPosts(data)
            } 
           
           catch (err) {
            console.log(err)
           }
           
        }
        
        getData()
    }, [url])

    


    return (
        <div>
            <h1>Posts</h1>
            <div>{posts.map((post)=><div key={post.id}>{post.title} - {post.body} </div>)}</div>
          
        </div>
    )
}