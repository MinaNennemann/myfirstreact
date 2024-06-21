import React, { useState } from "react";

import "./App.css";
import Greeting from "./Greeting";

const App = () => {
  const [counter, setCounter] = useState(0);

  const changeCounter = () => {
    console.log("counter is", counter);
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const setToZero = () => {
    setCounter(0);
  };

  return (
    <>
      <div style={{ backgroundColor: counter < 5 ? "green" : "blue" }}>
        <Greeting
          name="Mina"
          city="Munich"
          club="JSC"
          color="green"
          animal="cat"
        />
        <Greeting
          name="John"
          city="Paris"
          club="ABC"
          color="blue"
          animal="dog"
        />
        <Greeting
          name="Mujgan"
          city="Istanbul"
          club="CCC"
          color="pink"
          animal="duck"
        />
        <button onClick={changeCounter}>Click on this to increment</button>
        <button onClick={decrementCounter}>Click on this to decrement</button>
        <button onClick={setToZero}>Set to zero</button>

        <p>Counter {counter}</p>
      </div>

      {/* <h3>my firstname is: </h3>
      <h3>my lastname is: </h3>
      <h3>I live in: </h3> */}
    </>
  );
};

export default App;
