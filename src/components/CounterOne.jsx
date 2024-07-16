import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
   switch (action) {
    case 'increment':
        return  state+1
        break;
    case 'decrement':
            return  state-1
            break; 
    case 'reset':
                return initialState
                break; 
    default:
        return state
        break;
   }
}
const CounterOne = () => {
   const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
     <div>count- {count}</div>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default CounterOne
