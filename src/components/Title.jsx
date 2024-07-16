import React from 'react'

const Title = () => {
console.log(`Rendering Title in title component`)
  return (
    <div>
      useCallBack hook
    </div>
  )
}
export default React.memo(Title) 
