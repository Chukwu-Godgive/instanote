// Reusable Get Started Button
import React from "react";

function GetStartedButton(props) {
  return (
    <div>
      <button style={props.style}>{props.buttonName}</button>
    </div>
  );
}

export default GetStartedButton;
