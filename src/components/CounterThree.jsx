import React, { useReducer } from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state+1
            break;
        case 'decrement':
            return state-1
            break;
        case 'reset':
            return initialState
            break;    
        default:
            return state
            break;
    }
}
const CounterThree = () => {
    const[count,dispatch]=useReducer(reducer,initialState)
    const[count2,dispatch2]=useReducer(reducer,initialState)
  return (
    <div>
      <div>count {count}</div>
      <button onClick={()=>dispatch('increment')}>increment by 1</button>
      <button onClick={()=>dispatch('decrement')}>decrement by 1</button>
      <button onClick={()=>dispatch('reset')}>reset</button>

      <div>count {count2}</div>
      <button onClick={()=>dispatch2('increment')}>increment by 1</button>
      <button onClick={()=>dispatch2('decrement')}>decrement by 1</button>
      <button onClick={()=>dispatch2('reset')}>reset</button>
    </div>
  )
}
export default CounterThree
