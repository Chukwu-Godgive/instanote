import React, { useState } from "react";
import Footer from "../components/Footer";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import { Link } from "react-router-dom";
import GoToHome from "../components/GetStartedButton";

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

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div>
      <GeneralNavbar />
      <div className="container">
        <Link to="/">
          <GoToHome style={goToHomeStyle} buttonName="⬅ Goto Home" />
        </Link>
        <div className="registration-form">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
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
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegistrationForm;
