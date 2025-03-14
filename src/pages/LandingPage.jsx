import React from "react";
import Form from "../components/form/Form";

const LandingPage = () => {
  return <Form type="login" onSubmit={() => console.log("Usuario autenticado")} />;
};

export default LandingPage;
