import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  const addValue=() => {
    console.log("value added",counter);
    if(counter < 20)
    {
    setCounter(counter + 1);
   }
   else {
    alert("Counter cannot be more than 20");}
  }
   const removeValue=() => {
    console.log("value removed",counter);
    if(counter > 0)
    {
    setCounter(counter - 1);
   }
   else {
    alert("Counter cannot be less than 0");}
  }

  return ( 
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={addValue }>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
