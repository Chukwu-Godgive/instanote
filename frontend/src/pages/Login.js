import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoToHome from "../components/GetStartedButton";
import LoginButton from "../components/GetStartedButton";
import axios from "axios";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import Footer from "../components/Footer";

// inline styles for login button
const goToHomeStyle = {
  border: "1.5px solid lightseagreen",
  backgroundColor: "white",
  padding: "5px 3px",
  fontSize: "16px",
  fontWeight: "400",
  borderRadius: "8px",
  margin: "5px 0 50px",
  cursor: "pointer",
  color: "black",
};

// inline styles for warning message
const warningStyle = {
  color: "red",
  fontSize: "14px",
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
  const [warning, setWarning] = useState("");
  const [login, setLogin] = useState({
    usernameEmail: "",
    password: "",
    rememberMe: "",
  });

  const getUserInput = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents form reload

    const user = login.usernameEmail;

    // check if inputs are empty
    if (user !== "") {
      axios // make a get request
        .get("https://instanoteserver.onrender.com/api/user/" + user)
        .then((getResponse) => {
          let response = getResponse.data;

          // checks if the user is registered or not
          if (response !== null) {
            if (
              response.email === user &&
              response.password === login.password
            ) {
              // This stores the users detail to be accessed in the other pages
              sessionStorage.setItem(
                "currentUser",
                JSON.stringify(response.email)
              );
              window.location = "/dashboard";
            } else {
              setWarning("Please check your details");
            }
          } else {
            setWarning("User not found");
          }
        })
        .catch((getError) => {
          console.log(getError);
        });
    } else {
      setWarning("Input field is empty");
    }
  };

  return (
    <div className="login">
      <GeneralNavbar pageDirectory="/" />
      <div className="container">
        <Link to="/">
          <GoToHome style={goToHomeStyle} buttonName="⬅ Goto Home" />
        </Link>

        <div className="sub-login">
          <div className="login-welcome">
            <h3>Welcome back</h3>
            <p>Please login to your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <p style={warningStyle}>{warning}</p>
              <p className="login-label">Username or Email</p>
              <input
                className="sub-login-input"
                type="text"
                placeholder="Username or Email"
                name="usernameEmail"
                autoComplete="off"
                value={login.usernameEmail}
                onChange={getUserInput}
              />

              <p className="login-label">Password</p>
              <input
                className="sub-login-input"
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={login.password}
                onChange={getUserInput}
              />

              <div className="login-settings">
                <p>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    value={login.rememberMe}
                    onChange={getUserInput}
                  />{" "}
                  Remember me
                </p>
                <Link>
                  <p>Forget password?</p>
                </Link>
              </div>

              {/* The button is passed down as a props from GetStartedButton component*/}
              <LoginButton style={loginButtonStyle} buttonName="Login" />

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
      <Footer />
    </div>
  );
}

export default Login;
