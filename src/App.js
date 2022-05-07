import "./App.css";
import { useState, useReducer } from "react";

function App() {
  // prvi zadatak postavuti counter pomocu use stejta
  // drugi zadatak input
  //treci zadatak iskoristiti useReducer udicu, za jedno dugme koje
  //je brojac i prikazuje text

  // const [counter, setCounter] = useState(0);

  // const [stat, setStat] = useState("example"); //useState hook

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "incriment":
  //       return {
  //         showText: state.showText,
  //         reducerCounter: state.reducerCounter + 1,
  //       };
  //     case "decriment":
  //       return {
  //         showText: state.showText,
  //         reducerCounter: state.reducerCounter - 1,
  //       };
  //     case "showText":
  //       return {
  //         showText: !state.showText,
  //         reducerCounter: state.reducerCounter,
  //       };
  //     default:
  //       return state;
  //   }
  // };

  // function setInputHandler(e) {
  //   const newStat = e.target.value;
  //   setStat(newStat);
  // }

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
          showText: state.showText,
        };
      case "showText":
        return { cont: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div className="App">
      <header className="bg-dark text-white p-4 mb-2"></header>
      <form className="form">
        <h1>Hello from react</h1>
        {/* <span className="span">{counter}</span>
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
          Decriment */}
        {/* </button> */}
        {/* <input type="text" onChange={setInputHandler} />
        <span>
          <p>your example is here: {stat}</p>
        </span> */}

        {state.showText && <p>Show this text</p>}
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "showText" });
          }}
          // onClick={() => {
          //   dispatch({ type: "incriment" });
          //   dispatch({ type: "showText" });
          // }}
          class="btn btn-secondary"
        >
          Use reducer dugme
        </button>
        {state.count}
      </form>
    </div>
  );
}

export default App;
