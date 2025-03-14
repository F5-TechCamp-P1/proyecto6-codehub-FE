import React from "react";
import "./LandingPage.css";
import logo from "./assets/logo.jpeg";

const LandingPage = () => {
  return (
    <div className="login-box">
      <div className="logo_container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>
        <h1 className="title">Log in</h1>
        <input type="text" placeholder="Usuario" className="input-field" />
        <input type="password" placeholder="********" className="input-field" />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LandingPage;
