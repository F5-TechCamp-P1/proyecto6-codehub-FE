import React from "react";
import Form from "../components/form/Form";

const UploadPage = () => {
  return <Form type="upload" onSubmit={(data) => console.log("Contenido subido:", data)} />;
};

export default UploadPage;