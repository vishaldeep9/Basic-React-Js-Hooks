import React, { useState } from 'react'

const HookCounterFour = () => {
    const[items,setItems]=useState([])
    const addNumber = ()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
      <button onClick={addNumber}>Add number</button>
      <ul>
        {
            items.map(i=> <li key={i.id}>{i.value} {i.id}</li>)
        }
      </ul>
    </div>
  )
}
export default HookCounterFour
