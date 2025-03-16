import React from "react";
import "./FormButton.css";

const FormButton = ({ label, onClick }) => {
  return <button className="form-button" onClick={onClick}>{label}</button>;
};

export default FormButton;