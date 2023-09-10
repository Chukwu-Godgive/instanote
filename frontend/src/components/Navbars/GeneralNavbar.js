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

function GeneralNavbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-contents">
          <div style={logo}>
            <Link to="/">
              <img style={logoStyle} src={InstaNoteLogo} alt="instanote logo" />
            </Link>
          </div>
          {/* <div className="menus">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default GeneralNavbar;
