import React from "react";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import Footer from "../components/Footer";
import Notice from "../components/Notice";
import AddNoteButton from "../components/AddNoteButton";
import { Link } from "react-router-dom";
import Delete from "../images/icons/trash.png";

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
  return (
    <div className="dashboard">
      <GeneralNavbar pageDirectory="/dashboard" name_1="Notes" name_2="Write" />
      <div className="container">
        {/* We will use conditioning to determine if notes is available or not to know the design to display.
         */}
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

        <div className="notes-available">
          <div>
            <Link style={addNoteButton} to="/writenote">
              <AddNoteButton />
            </Link>
          </div>

          {/* We will map out the list of notes here using this
          list-of-notes below */}

          <div className="list-of-notes">
            <div style={noteBoard}>
              <p style={noteDate}>12-30-2023</p>
              <h3 style={noteTitle}>My title</h3>
              <p style={noteBody}>
                This section will appear when they have note
              </p>
              <div style={action}>
                <img style={noteBoardAction} src={Delete} alt="delete note" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
