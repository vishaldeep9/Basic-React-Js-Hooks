import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PostList = () => {
    const [list, setList]=useState([])
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        // Define the asynchronous function to fetch data
        const fetchData= async ()=>{
             try {
                 // Use axios to fetch data and wait for the response
            const responce=await axios.get('https://jsonplaceholder.typicode.com/posts')
            // Update state with fetched data
            setList(responce.data)
             } catch (err) {
                // Update state with error message if the request fails
                setError(err.message)
             }
             finally{
                   // Update state to indicate loading is complete
              setLoading(false)
             }
        }
      fetchData()
    },[])

    if(loading){
        return <div> Loading.......</div>
    }
    if(error){
        return <div> Error : {error}</div>
    }
  return (
    <div >
      <h1>list of post</h1>
      {
        list.map(item => {
            return <div key={item.id}>{item.title}</div>
        }) 
      }  
    </div>
  )
}
export default PostList
