import "./App.css";
import { useState } from "react";

function App() {
  // prvi zadatak postavuti counter pomocu use stejta
  // drugi zadatak input
  //treci zadatak iskoristiti useReducer udicu, za jedno dugme koje
  //je brojac i prikazuje text

  const [counter, setCounter] = useState(0);

  const [stat, setStat] = useState("example"); //useState hook

  function setInputHandler(e) {
    const newStat = e.target.value;
    setStat(newStat);
  }

  return (
    <div className="App">
      <header className="bg-dark text-white p-4 mb-2"></header>
      <form className="form">
        <h1>Hello from react</h1>
        <span className="span">{counter}</span>
        <button
          type="button"
          onClick={() => setCounter(counter + 1)}
          class="btn btn-primary"
        >
          Incriment
        </button>

        <button
          type="button"
          onClick={() => setCounter(counter - 1)}
          class="btn btn-danger"
        >
          Decriment
        </button>
        <input type="text" onChange={setInputHandler} />
        <span>
          <p>your example is here: {stat}</p>
        </span>

        <button type="button" class="btn btn-secondary">
          Use reduser dugme
        </button>

        <span className="span">{state.reducerCounter}</span>
        <span>{show}</span>
      </form>
    </div>
  );
}

export default App;
state.reducerCounter;
