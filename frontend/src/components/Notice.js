import React from "react";
import NoticeIcon from "../images/icons/idea.png";

// inline object style for notice board
const noticeBoard = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  backgroundColor: "lightgoldenrodyellow",
  borderRadius: "10px",
  padding: "20px",
  width: "fit-content",
  margin: "15px auto",
};

const noticeStyle = {
  width: "50px",
  paddingBottom: "5px",
};

const noticeMessage = {
  textAlign: "center",
  paddingLeft: "10px",
};

function Notice(props) {
  return (
    <div style={noticeBoard}>
      <img style={noticeStyle} src={NoticeIcon} alt="note notice" />
      <p style={noticeMessage}>{props.message}</p>
    </div>
  );
}

export default Notice;
