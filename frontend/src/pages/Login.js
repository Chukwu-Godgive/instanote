import React from "react";
import { Link } from "react-router-dom";
import GoToHome from "../components/GetStartedButton";
import LoginButton from "../components/GetStartedButton";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import Footer from "../components/Footer";

// inline styles for login button
const goToHomeStyle = {
  border: "1.5px solid lightseagreen",
  backgroundColor: "white",
  padding: "5px 3px",
  fontSize: "16px",
  fontWeight: "400",
  borderRadius: "8px",
  margin: "2px 0 50px",
  cursor: "pointer",
  color: "black",
};
// inline styles for login button
const loginButtonStyle = {
  border: "none",
  backgroundColor: "lightseagreen",
  padding: "15px 7.5px",
  fontSize: "18px",
  fontWeight: "600",
  borderRadius: "8px",
  margin: "50px 0 20px",
  cursor: "pointer",
  color: "white",
  width: "100%",
  boxShadow: "1px 2px 6px lightgrey",
};

function Login() {
  return (
    <div className="login">
      {/* <GeneralNavbar/> */}
      <div className="container">
        <div className="sub-login">
          {/* Go to Home button, This button is passed down as a props from 
            GetStartedButton component
          */}
          <GoToHome style={goToHomeStyle} buttonName="⬅ Goto Home" />

          <div className="login-welcome">
            <h3>Welcome back</h3>
            <p>Please login to your account</p>
          </div>

          <form className="login-form">
            <div>
              <p className="login-label">Username or Email</p>
              <input
                className="sub-login-input"
                type="text"
                placeholder="Username or Email"
                name="username/email"
                autoComplete="off"
              />

              <p className="login-label">Password</p>
              <input
                className="sub-login-input"
                type="text"
                placeholder="Password"
                name="password"
                autoComplete="off"
              />

              <div className="login-settings">
                <p>
                  <input type="checkbox" /> Remember me
                </p>
                <Link>
                  <p>Forget password?</p>
                </Link>
              </div>

              {/* The button is passed down as a props from GetStartedButton component*/}
              <LoginButton
                style={loginButtonStyle}
                buttonName="Create Account"
              />

              <p>
                Don't have an account?
                <span>
                  <Link to="/signup"> Signup</Link>
                </span>
              </p>
            </div>

            <div className="login-social-button">
              <div className="login-option">
                <hr />
                <p>Or</p>
                <hr />
              </div>
              <div>
                <GoogleLoginButton />
                <FacebookLoginButton />
                <TwitterLoginButton />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
