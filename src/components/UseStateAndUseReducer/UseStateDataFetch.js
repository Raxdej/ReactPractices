import React, {useState, useEffect} from "react";
import axios from 'axios'

export default function UseStateDataFetch() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setIsLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(error=>{
            setIsLoading(false)
            setPost({})
            setError('Oops... Something went wrong')
        })
    }, [])

    return(
        <div>
            {
                isLoading ? 'data is loading' : post.body
            }
            {
                error ? error : null
            }
        </div>
    )
}