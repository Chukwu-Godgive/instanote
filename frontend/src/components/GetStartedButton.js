// Reusable Get Started Button
import React from "react";

function GetStartedButton(props) {
  // used object inline styling here
  const buttonStyle = {
    border: "none",
    backgroundColor: "orange",
    padding: "15px 7.5px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "8px",
    margin: "50px 0 20px",
    cursor: "pointer",
  };

  return (
    <div>
      <button style={buttonStyle}>{props.buttonName}</button>
    </div>
  );
}

export default GetStartedButton;
