import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchingDataOne() {
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const[post,setPost]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typiode.com/posts/1')
        .then(responce=>{
            setLoading(false)
            setError('')
            setPost(responce.data)
        })
        .catch(error=>{
            setLoading(false)
            setError('something went wrong..!')
            setPost({})
        })
    },[])
  return (
    <div>
      {loading ? 'loading...':post.title}
      {error? error:null}
    </div>
  )
}

export default FetchingDataOne
