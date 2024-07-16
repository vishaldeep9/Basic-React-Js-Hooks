import React, { useMemo, useState } from 'react'
const Counter = () => {
    const[countOne,setCountone]=useState(0)
    const[countTwo,setCounttwo]=useState(0)

    const incrementOne=()=>{
        setCountone(countOne+1)
    }
    const isEven=useMemo( ()=>{
        let i=0
        while(i<200000000) i++
        return countOne%2===0
    },[countOne]) 

    const incrementTwo=()=>{
        setCounttwo(countTwo+1)
    }
  return (
    <div>
     <div>
        <button onClick={incrementOne}>increment countOne- {countOne}</button>
        {isEven?'even':'odd'}
        </div> 
        <div>
            <button onClick={incrementTwo}>increment countTwo- {countTwo}</button>
        </div>
    </div>
  )
}
export default Counter
