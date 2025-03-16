import React, { useState } from "react";
import { FormButton } from "../button/FormButton";
import logo from "/logo.jpeg";
import "./Form.css";

const InputField = ({ type, placeholder, value, onChange, name }) => {
  return (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    name={name}
    className="input-field"
    onChange={onChange}
  />
  )
};

export const Form = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    inputValue: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (type === "login" && (!formData.username.trim() || !formData.password.trim())) ||
      (type !== "login" && !formData.inputValue.trim())
    ) {
      setError("❌ El campo no puede estar vacío.");
      return;
    }

    setError("");

    type === "login" ? onSubmit(formData.username, formData.password) : onSubmit(formData.inputValue);
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="logo_container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>
        <h1 className="title">
          {type === "login" ? "Log in" : type === "upload" ? "Añadir contenido" : "Añadir categoría"}
        </h1>

        {type === "login" ? (
          <>
            <InputField
              type="text"
              placeholder={type === "upload" ? "Ruta" : "Nombre"}
              name="inputValue"
              value={formData.username}
              onChange={(e) => handleChange(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="********"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e.target.value)}
            />
          </>
        ) : (
          <>
            <InputField
              type="text"
              placeholder={type === "upload" ? "Ruta" : "Nombre"}
              className="inputValue"
              value={formData.inputValue}
              onChange={handleChange}
            />
            {type !== "login" && <div className="drop-area">{type === "upload" ? "Arrastra Aquí" : "Descripción"}</div>}
          </>
        )}

        <FormButton label={type === "login" ? "Login" : "Añadir"} />

        {error && <div className="message error">{error}</div>}
      </div>
    </form>
  );
};