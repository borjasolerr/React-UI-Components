import React from "react";
import "./App.css";
import Display from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="app">
      <Display />
      <div className="btn-container">
        <NumberButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
