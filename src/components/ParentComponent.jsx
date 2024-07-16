import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(50000)

    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

    const increaseAge=useCallback(()=>{
        setAge(age+1)
    },[age])

  return (
    <div>
        <Title/>
        <Count text='Age' count={age}/>
        <Button handleClick={increaseAge}>Increment Age</Button>
        <Count text='Salary' count={salary}/>
        <Button handleClick={incrementSalary}> Increment Salary</Button>
      
    </div>
  )
}
export default ParentComponent
