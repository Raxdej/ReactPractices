import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function FetchMutiplePosts() {
    const [posts, setPosts] = useState([])
    const [id, setID] = useState()
    const [buttonClickId, setbuttonClickId] = useState()

    const handleClick =()=> {
        setbuttonClickId(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        // }, [])    
    }, [buttonClickId])
    return (
        <div>
            <button type="button" value={id} onClick={handleClick}>Fetch a Post</button>
            <input
                type="text"
                onChange={(e) => setID(e.target.value)}
            />
            <h1> {posts.title} </h1>
            {/* <ul>
                {posts.map((post)=>(
                    <li key={post.id}> {post.title} </li>
                ))}
            </ul> */}
        </div>
    )
}