import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProgressBar from "./ProgressBar";
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState('')


  const handleClick = () => {
   
  
  }
  const handleReset = () =>{
    setTitle(0)
  }

    return (
      <div className="App container">
        <h1>Timer Clock</h1>
        <input
          type="text"
          class="m-3 form"
           onChange={event => setTitle(event.target.value)}
          placeholder="Enter time in Minutes"
          aria-label="Username"
        />
        <button
          type="button"
          onClick={handleClick}
          class="btn btn-outline-primary m-3"
        >
          Start
        </button>
        <button
          type="button"
          // onClick={this.handleStop}
          class="btn btn-outline-primary m-3"
        >
          Stop
        </button>
        <button
          type="button"
          onClick={handleReset}
          class="btn btn-outline-primary m-3"
        >
          Reset
        </button>
        <ProgressBar value={title} max={100} />
      </div>
    );
  };


export default App;
