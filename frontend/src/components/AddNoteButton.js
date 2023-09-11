import React from "react";
import AddNoteIcon from "../images/icons/sticky-notes.png";

const addNoteIconStyle = {
  textAlign: "center",
  fontWeight: "600",
  fontSize: "10px",
  margin: "15px auto",
  cursor: "pointer",
  color: "rgb(5, 5, 44)",
  width: "50px",
};

const addNoteIconImg = {
  width: "50px",
};

const addNoteText = {
  display: "flex",
};

function AddNoteButton() {
  return (
    <div style={addNoteIconStyle}>
      <img style={addNoteIconImg} src={AddNoteIcon} alt="add note" />
      <p style={addNoteText}>
        <span>Add</span>
        <span>Note</span>
      </p>
    </div>
  );
}

export default AddNoteButton;
