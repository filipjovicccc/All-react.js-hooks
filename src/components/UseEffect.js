import React from "react";
import { useEffect, useState } from "react";
// zadatak fetching data sa publick apija i prikazati na ekranu
import axios from "axios";

function UseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, [count]);

  return (
    <div>
      Hello form {data} and useEffect succses also {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add count
      </button>
    </div>
  );
}

export default UseEffect;
