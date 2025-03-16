import React, { useState } from "react";
import "./Form.css";
import FormButton from "../button/FormButton";
import logo from "/logo.jpeg";

const Form = ({ type, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (
      (type === "login" && (!username.trim() || !password.trim())) ||
      (type !== "login" && !inputValue.trim())
    ) {
      setError("❌ El campo no puede estar vacío.");
      return;
    }

    setError("");

    if (type === "login") {
      onSubmit({ username, password });
    } else {
      onSubmit(inputValue);
    }
  };

  return (
    <div className="form-box">
      <div className="logo_container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>
        <h1 className="title">
          {type === "login" ? "Log in" : type === "upload" ? "Añadir contenido" : "Añadir categoría"}
        </h1>

        {/* Fields for login */}
        {type === "login" ? (
          <>
            <input
              type="text"
              placeholder="Usuario"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="********"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder={type === "upload" ? "Ruta" : "Nombre"}
              className="input-field"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {type !== "login" && <div className="drop-area">{type === "upload" ? "Arrastra Aquí" : "Descripción"}</div>}
          </>
        )}

        {/* Button */}
        <FormButton label={type === "login" ? "Login" : "Añadir"} onClick={handleSubmit} />

        {/* Error */}
        {error && <div className="message error">{error}</div>}
      </div>
    </div>
  );
};

export default Form;