import React, { useEffect, useState } from "react";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import Footer from "../components/Footer";
import Notice from "../components/Notice";
import AddNoteButton from "../components/AddNoteButton";
import { Link } from "react-router-dom";
import Delete from "../images/icons/trash.png";
import axios from "axios";

// inline object style for note board
const addNoteButton = {
  float: "right",
  right: "10rem",
  textDecoration: "none",
  position: "fixed",
};

const noteBoard = {
  backgroundColor: "rgba(224, 255, 255, 0.103)",
  borderRadius: "10px",
  padding: "20px",
  width: "25rem",
  height: "175px",
  margin: "15px 15px",
  boxShadow: "1px 1.5px 3px lightgray",
};

const flexNotes = {
  paddingTop: "50px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  minHeight: "80vh",
};

const noFlexNotes = {
  paddingTop: "",
  display: "",
  flexWrap: "",
  justifyContent: "",
  minHeight: "",
};

const noteDate = {
  fontSize: "14px",
  fontWeight: "600",
};

const noteTitle = {
  paddingTop: "15px",
  paddingBottom: "15px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

const noteBody = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

const action = {
  float: "right",
};

const noteBoardAction = {
  width: "25px",
  marginTop: "15px",
  cursor: "pointer",
};

const addNoteSize = {
  width: "fit-content",
  margin: "0 auto",
};

function Dashboard() {
  // states that stores users details and notes
  const [getUser, setGetUser] = useState([]);
  const [userNotes, setUserNotes] = useState([]);

  // this gets the user info locally and online
  useEffect(() => {
    const getItemLocally = async () => {
      const currentUser = JSON.parse(
        sessionStorage.getItem("currentUser")
      ); // gets the user stored email during login

      await axios
        .get("https://instanoteserver.onrender.com/api/user/" + currentUser)
        .then((userResponse) => {
          setGetUser(userResponse.data); // stores the received info to the getUser state
        })
        .catch((userError) => {
          console.log(userError);
        });
    };
    getItemLocally(); // this runs the function within useEffect
  }, []);

  // gets users note from database and stores it in userNotes state
  useEffect(() => {
    const getUserStoredNote = async () => {
      let noteId = getUser._id;
      await axios
        .get("https://instanoteserver.onrender.com/api/notes/" + noteId)
        .then((notesResponse) => {
          setUserNotes(notesResponse.data);
        })
        .catch((noteError) => {
          console.log(noteError);
        });
    };
    getUserStoredNote(); // this runs the function within useEffect
  });
  // console.log(userNotes);

  return (
    <div className="dashboard">

      <GeneralNavbar pageDirectory="/dashboard" name_1="Notes" name_2="Write" />

      <div className="container">

        {/* We will use conditioning to determine if notes is available or not to know the design to display.
         */}

        {userNotes.length ? ( <div>
          <Link style={addNoteButton} to="/writenote">
            <AddNoteButton />
          </Link>
        </div> ) : null}

        {/* We will map out the list of notes here using this list-of-notes below
        */}

        <div style={userNotes.length ? flexNotes : noFlexNotes}>
          {userNotes.length ? (userNotes.map((note, idx) => (
            <div style={noteBoard} key={idx}>

              <p style={noteDate}>12-30-2023</p>
              <h3 style={noteTitle}>{note.title}</h3>
              <p style={noteBody}>{note.body}</p>

              <div style={action}>
                <img style={noteBoardAction} src={Delete} alt="delete note" />
              </div>

            </div>
            ))

          ) : (

            <div className="notes-unavailable">

              <div className="dashboard-notice">
                <Notice message="Your notes will appear here when you create it." />
              </div>

              <div style={addNoteSize}>
                <Link to="/writenote">
                  <AddNoteButton />
                </Link>
              </div>

            </div>
            
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
