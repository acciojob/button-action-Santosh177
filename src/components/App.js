import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [isDisabled, seIsDisabled] = useState(false)
const handleClick = ()=>{
  seIsDisabled(true);
};
  return (
    <div className="App" id="main">
      // Do not alter the main div
    <p id="para" disabled={isDisabled}>"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>
    <button id="click" onClick=(handleClick}>click me </button>
    </div>
  );
}

export default App
