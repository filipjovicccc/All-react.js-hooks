import { useState } from "react";
import Reducer from "./components/UseReducer"
import Effects from "./components/UseEffect";


const App = () =>{
  //1.Zadatak / Counter increasment useState
  const [counter, setCounter] = useState(0)

  const counterPlus = () => {
  setCounter(counter +1)
  }
 
 return <div className="form">
    <h1>Hello world</h1>
 
    <div>
    {counter}<button onClick={counterPlus} >Increment</button>

    </div>
    <Reducer />
    <Effects />
 </div>

}

export default App
