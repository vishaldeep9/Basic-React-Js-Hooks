import React, { useEffect, useRef, useState } from 'react'

const HooksTimer = () => {
    const[timer,setTimer]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
         intervalRef.current=setInterval(()=>{
          setTimer(timer=>timer+1)
          },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
      timer - {timer}
      <button onClick={()=>clearInterval(intervalRef.current)}>clear timer</button>
    </div>
  )
}
export default HooksTimer
