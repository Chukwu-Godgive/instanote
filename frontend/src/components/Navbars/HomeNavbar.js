// Landing page navigation component
import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-contents">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="menus">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
