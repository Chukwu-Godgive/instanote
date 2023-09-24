import React, { useState } from "react";
import Footer from "../components/Footer";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import CustomButton from "../components/CustomButton";
import popUp from "sweetalert2";
import axios from "axios";

function WriteNote() {
  const noteDate = new Date().toDateString(); // creates date
  const getUserLocal = JSON.parse(sessionStorage.getItem("currentUser")); // gets user info locally

  //state variables to store the date, title, body, and user_id for the note
  const [userInput, setUserInput] = useState({
    date: noteDate,
    title: "",
    body: "",
    ref: getUserLocal.ref,
  });

  // sets user inputs
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  // handles note submit and saving

  const handleSave = async (e) => {
    e.preventDefault();
    await axios
      .post("https://instanoteserver.onrender.com/api/note", userInput)
      .then((noteResponse) => {
        if (noteResponse.status === 200) {
          popUp.fire({
            icon: "success",
            title: "Note added!",
            showConfirmButton: false,
            timer: 1500,
          });
          setUserInput({ title: "", body: "" });
        }
      })
      .catch((noteError) => {
        console.log(noteError);
      });
  };

  return (
    <div>
      <GeneralNavbar pageDirectory="/dashboard" name_1="Notes" name_2="Write" />
      <div className="writeNote-container">
        <form onSubmit={handleSave}>
          <h1>Write a Note</h1>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              autoComplete="off"
              value={userInput.title}
              onChange={handleUserInput}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              name="body"
              autoComplete="off"
              value={userInput.body}
              onChange={handleUserInput}
            />
          </div>
          <button style={CustomButton} type="submit">
            Save
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default WriteNote;
