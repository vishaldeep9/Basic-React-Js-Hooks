import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

const CountsOne = () => {
  const[count,increment,decrement,reset]=useCounter(0,5)
  return (
    <div>
      <div>count= {count}</div>
      <button onClick={increment}>increse </button>
      <button onClick={decrement}>decrese </button>
      <button onClick={reset}>reset </button>
    </div>
  )
}
export default CountsOne
