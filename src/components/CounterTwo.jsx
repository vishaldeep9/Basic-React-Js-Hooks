import React, { useReducer } from 'react'

const initialState={
    firstCounter:0,
    secondCounter:5
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value};
            break;
        case 'decrement':
                return {...state,firstCounter:state.firstCounter-action.value};
                break;

                case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value};
            break;

            case 'decrement2':
                return {...state,secondCounter:state.secondCounter-action.value};
                break;

        case 'reset':
                    return initialState;
                    break;           
        default:
            return state
            break;
    }

}

const CounterTwo = () => {
   const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        <div>Count- {count.firstCounter}</div>
        <div>count- {count.secondCounter}</div>
      <button onClick={()=>dispatch({type:'increment' ,value:1})}>increment by 1</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement by 1</button>

      <button onClick={()=>dispatch({type:'increment2' ,value:5})}>increment by 5</button>
      <button onClick={()=>dispatch({type:'decrement2',value:5})}>decrement by 5</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default CounterTwo
