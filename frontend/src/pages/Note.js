import React, { useState } from "react";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Edit from "../images/icons/edit.png";

const action = { float: "right" };
const noteViewHeight = { minHeight: "100vh" };
const linkStyle = { textDecoration: "none", color: "inherit" };
const noteBoardAction = {
  width: "25px",
  marginTop: "50px",
  cursor: "pointer",
};

function Note() {
  const [notes, setNotes] = useState([]);
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser")); // gets the user stored email during login
  axios
    .get("https://instanoteserver.onrender.com/api/notes/" + currentUser.ref)
    .then((userResponse) => {
      setNotes(userResponse.data); // sets users note from database
    })
    .catch((userError) => {
      console.log(userError);
    });

  let noteParams = useParams(); // gets the params from the note user clicked to view
  const note = notes.find((found) => found.title === noteParams.id); // find the note usingthe params clicked

  return (
    <div>
      <div style={noteViewHeight}>
        <GeneralNavbar
          pageDirectory="/dashboard"
          name_1="Notes"
          name_2="Write"
        />
        <div className="view-note">
          <div className="container">
            <div className="view-main-note">
              {note ? (
                <div className="view-note-items">
                  <p className="note-date">{note.date}</p>
                  <h2 className="note-title">{note.title}</h2>
                  <p className="note-body">{note.body}</p>

                  <div style={action}>
                    <Link style={linkStyle} to={`/editnote/${note._id}`}>
                      <img
                        style={noteBoardAction}
                        src={Edit}
                        alt="edit note"
                      />
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Note;
