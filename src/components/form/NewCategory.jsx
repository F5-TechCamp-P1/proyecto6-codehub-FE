import React, { useState } from "react";
import "./NewCategory.css";
import logo from "./assets/logo.jpeg";

const UploadPage = () => {
  const [message, setMessage] = useState("");
  const [nombre, setNombre] = useState(""); 

  const handleUpload = () => {
    if (!nombre.trim()) {
      setMessage("❌ El campo 'Nombre' no puede estar vacío.");
    } else {
      setMessage(""); 
      console.log("Categoría añadida:", nombre); 
    }
  };

  return (
    <div className="upload-box">
      <div className="logo_container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>
        <h1 className="title">Añadir categoría</h1>
        <input
          type="text"
          placeholder="Nombre"
          className="input-field"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <div className="drop-area">Descripción</div>
        <button className="upload-button" onClick={handleUpload}>Añadir</button>
        {message && <div className="message error">{message}</div>}
      </div>
    </div>
  );
};

export default NewCategory;