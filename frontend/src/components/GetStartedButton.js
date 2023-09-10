// Reusable Get Started Button
import React from "react";

function GetStartedButton(props) {
  return (
      <button style={props.style}>{props.buttonName}</button>
  );
}

export default GetStartedButton;
