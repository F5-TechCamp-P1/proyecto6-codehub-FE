import React, { useState } from "react";
import "./UploadPage.css";
import logo from "./assets/logo.jpeg";

const UploadPage = () => {
  const [message, setMessage] = useState(""); 

  const handleUpload = () => {
    
    const success = Math.random() > 0.5; 

    if (success) {
      setMessage("✅ Contenido adjuntado con éxito."); 
    } else {
      setMessage("❌ Hubo un problema al adjuntar el contenido."); 
    }
  };

  return (
    <div className="container">
      <div className="upload-box">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Subir Contenido</h1>
        <input type="text" placeholder="Ruta" className="input-field" />
        <div className="drop-area">Arrastra Aquí</div>
        <button className="upload-button" onClick={handleUpload}>Añadir</button>
        {message && <div className={`message ${message.includes("✅") ? "success" : "error"}`}>{message}</div>}
      </div>
    </div>
  );
};

export default UploadPage;