import React from "react";
import { Link } from "react-router-dom";
import InstaNoteLogo from "../../images/Instanote_Logo.png";

// inline style for Logo
const logo = {
  margin: "0 auto",
  width: "fit-content",
};
const logoStyle = {
  width: "150px",
};

function GeneralNavbar(props) {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-contents">
          <div style={logo}>
            <Link to={props.pageDirectory}>
              <img style={logoStyle} src={InstaNoteLogo} alt="instanote logo" />
            </Link>
          </div>
          <div className="menus">
            <ul>
              <li>
                <Link to="/dashboard">{props.name_1}</Link>
              </li>
              <li>
                <Link to="/writenote">{props.name_2}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralNavbar;
