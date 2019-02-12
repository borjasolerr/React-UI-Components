import React from "react";
import "./Button.css";

function NumberButton() {
  return (
    <div className="btn_num--container">
      <button className="btn btn_num--clear">clear</button>
      <button className="btn btn_num--key">9</button>
      <button className="btn btn_num--key">8</button>
      <button className="btn btn_num--key">7</button>
      <button className="btn btn_num--key">6</button>
      <button className="btn btn_num--key">5</button>
      <button className="btn btn_num--key">4</button>
      <button className="btn btn_num--key">3</button>
      <button className="btn btn_num--key">2</button>
      <button className="btn btn_num--key">1</button>
      <button className="btn btn_num--clear">0</button>
    </div>
  );
}

export default NumberButton;
