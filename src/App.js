import { useState } from "react";
import Reducer from "./components/UseReducer"
import Effects from "./components/UseEffect";
import Ref from "./components/UseRef";
import EffectLayout from "./components/UseEffectLayout";
import Memo from "./components/UseMemo";
import Callback from "./components/useCallback";

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
    <Ref />
    <EffectLayout />
    <Memo />
    <Callback />
    
 </div>

}

export default App
