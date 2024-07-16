import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

const CountsTwo = () => {
  const[count,increment,decrement,reset]=useCounter(10,10)
  return (
    <div>
      <div>count= {count}</div>
      <button onClick={increment}>increse </button>
      <button onClick={decrement}>decrese </button>
      <button onClick={reset}>reset </button>
    </div>
  )
}
export default CountsTwo
