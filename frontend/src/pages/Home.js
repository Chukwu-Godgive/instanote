// Home handles all the contents of the landing page
import React from "react";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import Button from "../components/GetStartedButton";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// inline styles for Get started Home button
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

function Home() {
  return (
    <div>
      <HomeNavbar />
      <div className="hero-section">
        <div className="container">
          <div className="hero-box">
            <div>
              <h1 className="home-title">
                Write Unlimited Notes Without The Fear Of Losing Any ..|
              </h1>
              <p className="home-desc">
                InstaNote app helps you write and store your notes in one place.
              </p>

              {/* The button is passed down as a props from GetStartedButton component*/}
              <Link to="/signup">
                <Button style={buttonStyle} buttonName="Get Started" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="home-main">
          <h2 className="home-main-title">Why InstaNote</h2>
          <div className="home-main-desc">
            <p>
              Note-taking has never been easier or more convenient. But with{" "}
              <span className="home-note-color">InstaNote</span> say goodbye to
              the clutter of physical notebooks and embrace the future of
              digital note-taking.
            </p>
            <p className="home-main-desc-sub">
              Register today and start organizing your thoughts with ease.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
