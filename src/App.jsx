import React, { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
import ComponentC from './components/ComponentC'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import Componenta from './components/Componenta'
import Componentd from './components/Componentd'
import Componentff from './components/Componentff'
import FetchingDataOne from './components/FetchingDataOne'
import FetchingDataTwo from './components/FetchingDataTwo'
import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'
import FocusInput from './components/FocusInput'
import HooksTimer from './components/HooksTimer'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import CountsOne from './components/CountsOne'
import CountsTwo from './components/CountsTwo'
import UserForm from './components/UserForm'

 export const UserContext=React.createContext()
 export const ChannelContext=React.createContext()
 export const CountContext=React.createContext()
// const initialState=0
// const reducer=(state,action)=>{
//    switch (action) {
//     case 'increment':
//         return  state+1
//         break;
//     case 'decrement':
//             return  state-1
//             break; 
//     case 'reset':
//                 return initialState
//                 break; 
//     default:
//         return state
//         break;
//    }
// }
function App() {
  //const [count, setCount] = useState(0)
    // const[count,dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className='App'>
      <UserForm/>
      {/* <CountsOne/> */}
      {/* <CountsTwo/> */}
      {/* <DocTitleOne/> */}
     
      {/* <HooksTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <FetchingDataTwo/> */}
      {/* <FetchingDataOne/> */}
      {/* count- {count}
      <Componenta/>
      <Componentd/>
      <Componentff/> */}
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={'Vishal'}>
        <ChannelContext.Provider value={'Deep'}>
      <ComponentC/>
        </ChannelContext.Provider>
</UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <IntervalHookCounter/> */}
      {/* <HookMouse/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <PostForm/> */}
    {/* <PostList/> */}
    </div>
    // </CountContext.Provider>
  )
}

export default App
