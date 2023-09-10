// Home handles all the contents of the landing page
import React from "react";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import HomeAsset from "../images/Home_Asset.png";
import Button from "../components/GetStartedButton";


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

              {/* The button is passed down as a prop */}
              <Button buttonName="Get Started" />
            </div>

            <div>
              <img src={HomeAsset} alt="instanote asset" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer goes here */}
    </div>
  );
}

export default Home;
