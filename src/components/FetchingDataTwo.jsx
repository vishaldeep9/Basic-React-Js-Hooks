import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const initialState={
    loading:true,
    post:{},
    error:''
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
            break;
        case 'FETCH_ERROR':
                return {
                    loading:false,
                    post:{},
                    error:'something went wrong...!'
                }
                break;
        default:
            return state
            break;
    }
}
const FetchingDataTwo = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(responce=>{
           dispatch({type:'FETCH_SUCCESS',payload:responce.data})
        })
        .catch(error=>{
           dispatch({type:'FETCH_ERROR'})
        })
    },[])
  return (
    <div>
      {state.loading ? 'loading...':state.post.title}
      {state.error ? state.error:null}
    </div>
  )
}

export default FetchingDataTwo
