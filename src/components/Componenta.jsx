import React, { useContext } from 'react'
import { CountContext } from '../App'

const Componenta = () => {
    const countContext=useContext(CountContext)
  return (
    <div>
      component A - {countContext.countState}
      <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
    </div>
  )
}
export default Componenta
