import React from "react";
import "./UploadPage.css";
import logo from "./assets/logo.jpeg";

const UploadPage = () => {
  return (
    <div className="container">
      <div className="upload-box">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Subir Contenido</h1>
        <input type="text" placeholder="Ruta" className="input-field" />
        <div className="drop-area">Arrastra Aquí</div>
        <button className="upload-button">Añadir</button>
      </div>
    </div>
  );
};

export default UploadPage;