import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">*</div>
        <h1 className="title">Log in</h1>
        <input type="text" placeholder="Usuario" className="input-field" />
        <input type="password" placeholder="********" className="input-field" />
        <button className="login-button">Login</button>
      </div>
      <footer className="footer">
        <span className="footer-logo">*</span> footer footer footer footer footer footer
      </footer>
    </div>
  );
};

export default LandingPage;