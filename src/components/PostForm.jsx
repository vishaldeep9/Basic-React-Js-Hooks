import React, { useState } from 'react'
import axios from 'axios'

const PostForm = () => {
  const[formData,setFormdata] =useState({
    userId:'',
    title:'',
    body:''
  })
 
  const[responceMessage,setResponsemessage]=useState('')
  const handleChange=(event)=>{
    const{name,value}=event.target
    setFormdata({
        ...formData,
        [name]:value
    })
  }
 
const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
        const responce= await axios.post('https://jsonplaceholder.typicode.com/posts',formData)
        console.log('Resonce Data :', responce.data)
        setResponsemessage('form submitted successfully')
    } catch (error) {
        console.log('There was an error submitting the form :',error)
        setResponsemessage('There was an error submitting the form.');
    }

}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <input type='text' placeholder='userId' name='userId' value={formData.userId} onChange={handleChange}/>
        </div>
        <div>
            <input type='text' placeholder='title' name='title' value={formData.title} onChange={handleChange}/>
        </div>
        <div>
            <input type='text' placeholder='body' name='body' value={formData.body} onChange={handleChange}/>
        </div>
        <button type='submit'>submit</button>
      </form>
      {responceMessage && <p>{responceMessage}</p>}
    </div>
  )
}
export default PostForm
