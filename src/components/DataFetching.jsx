import axios from 'axios'
import React, { useEffect, useState } from 'react'
const DataFetching = () => {
  const[post,setPost]=useState({})
  const[id,setId]=useState(1)
  const[idFromButton,setIdfrombutton]=useState(1)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
    .then(responce=>{
      console.log(responce)
      setPost(responce.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[idFromButton])
   const handleChange=(e)=>{
       setId(e.target.value)
    }
    const handleClick=()=>{
        setIdfrombutton(id)
    }
  return (
    <div>
          <input value={id} onChange={handleChange}/>
          <button type='button' onClick={handleClick}>fetch data</button>
          <div>{post.title}</div>
      {/* <ul>
        {post.map(posts=>(
          <li key={posts.id}>{posts.title} </li>
        ) ) }
      </ul>  */}
    </div>
  )
}
export default DataFetching
