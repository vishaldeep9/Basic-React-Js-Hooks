import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext,ChannelContext } from '../App'

const ComponentE = () => {
  const value = useContext(UserContext)
  const channel =useContext(ChannelContext)

  return (
    <div>
      {value} - {channel}
      {/* <ComponentF/> */}
    </div>
  )
}
export default ComponentE
