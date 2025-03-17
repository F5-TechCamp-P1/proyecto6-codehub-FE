import React from "react";
import "./FormButton.css";

export const FormButton = ({ label }) => {
  return <button className="form-button" type="submit" >{label}</button>;
};