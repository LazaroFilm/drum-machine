import React from "react";
// import logo from './logo.svg';
import { Counter } from "./features/counter/Counter";
// import "./App.css";
import Display from "./Display";
import DrumPad from "./DrumPad";

function App() {
  return (
    <div className="App">
      <Display />
      <DrumPad />
    </div>
  );
}

export default App;