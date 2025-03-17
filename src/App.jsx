import React from "react";
import { Page } from "./page/Page";
import { FormProvider } from "./context/FormContext";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
      <FormProvider>      
    <AuthProvider>
        <Page />
    </AuthProvider>
      </FormProvider>

  );
}

export default App;