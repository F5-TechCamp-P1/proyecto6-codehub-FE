import React, { useState } from "react";
import { FormButton } from "../button/FormButton";
import logo from "/logo.jpeg";
import "./Form.css";

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
  <input
    type={type}
    placeholder={placeholder}
    value={value || ""}
    name={name}
    className="input-field"
    onChange={onChange}
  />
  )
};

export const Form = ({ type, onSubmit }) => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [inputValue, setInputValue] = useState();
  const [error, setError] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (type === "login" && (!username.trim() || !password.trim())) ||
      (type !== "login" && !inputValue.trim())
    ) {
      setError("❌ El campo no puede estar vacío.");
      return;
    }

    setError("");

    type === "login" ? onSubmit(username, password) : onSubmit(inputValue);
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="********"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <InputField
              type="text"
              placeholder={type === "upload" ? "Ruta" : "Nombre"}
              className="inputValue"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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