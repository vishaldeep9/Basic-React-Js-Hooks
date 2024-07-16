import React, { useEffect, useState } from 'react'

const DocTitleTwo = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`count- ${count}`
    })
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>count- {count}</button>
    </div>
  )
}

export default DocTitleTwo
