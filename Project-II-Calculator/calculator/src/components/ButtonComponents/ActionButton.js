import React from "react";
import "./Button.css";

function ActionButton() {
  return (
    <div className="btn_action--container">
      <button className="btn btn_action--key">&divide;</button>
      <button className="btn btn_action--key">&times;</button>
      <button className="btn btn_action--key">&minus;</button>
      <button className="btn btn_action--key">&#43;</button>
      <button className="btn btn_action--key">&#61;</button>
    </div>
  );
}

export default ActionButton;
