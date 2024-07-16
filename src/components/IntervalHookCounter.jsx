import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
    const[count,setCount]=useState(0)
    
    const tick=()=>{
        setCount(count=>count+2)
    }
useEffect(()=>{
    console.log(`component Mounted`)
    const interval =setInterval(tick,1000)
    return ()=>{
        clearInterval(interval)
    }
},[count])

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
