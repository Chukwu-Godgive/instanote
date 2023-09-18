import React, { useState } from "react";
import Footer from "../components/Footer";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import { Link } from "react-router-dom";
import GoToHome from "../components/GetStartedButton";
import axios from "axios";

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

const failedStyle = {
  color: "darkkhaki",
  fontSize: "14px",
};

function RegistrationForm() {
  const [warning, setWarning] = useState("");
  const [failed, setFailed] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents form reload

    // validate users input
    if (formData === "") {
      setWarning("Please enter your details");
    }
    if (formData.password !== formData.confirmPassword) {
      setWarning("Please confirm your password!");
    } else {
      // checks users input first at the database
      let email = formData.email;
      axios
        .get("https://instanoteserver.onrender.com/api/user/" + email)
        .then((getResponse) => {
          let userContent = getResponse.data;

          // check between username and email, which one is in use
          if (userContent === null && getResponse.status === 200) {
            const getUserId =
              Math.random().toString().slice(2, 7) +
              Math.random().toString(36).slice(7, 12); // auto generate ids
            let neededFormData = {
              username: formData.username,
              email: formData.email,
              password: formData.password,
              userId: getUserId,
            };

            // make a post request to the database
            axios
              .post(
                "https://instanoteserver.onrender.com/api/user",
                neededFormData
              )
              .then(
                // stores the user info for easy access
                sessionStorage.setItem(
                  "currentUser",
                  JSON.stringify(formData.email)
                ),
                setFormData({
                  // resets the form
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }),
                setWarning(""),
                setFailed(""),

                (window.location = "/dashboard")
              )
              .catch((postError) => {
                console.log(postError);
              });
          } else {
            if (userContent.username === formData.username) {
              setWarning("Username taken");
            } else if (userContent.email === formData.email) {
              setWarning("Email taken");
            } else {
              setFailed("Failed, please try again");
            }
          }
        })
        .catch((postError) => {
          console.log(postError);
        });
    }
  };

  return (
    <div>
      <GeneralNavbar pageDirectory="/" />
      <div className="container">
        <Link to="/">
          <GoToHome style={goToHomeStyle} buttonName="⬅ Goto Home" />
        </Link>
        <div className="registration-form">
          <h2>Registration</h2>
          <p style={warningStyle}>{warning}</p>
          <p style={failedStyle}>{failed}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="off"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <p className="signup-option">
              Already have an account?
              <span>
                <Link to="/login"> Login</Link>
              </span>
            </p>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegistrationForm;
