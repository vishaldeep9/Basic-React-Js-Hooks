import React from 'react'
import { UserContext ,ChannelContext} from '../App'

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
          //anything i can write 
          user=>{
            return <ChannelContext.Consumer>
             { channel=> {
                return <div> Hello The value is {user} and channel is {channel} </div>
              } }
            </ChannelContext.Consumer>
          }
        }
      </UserContext.Consumer>
      
    </div>
  )
}
export default ComponentF
