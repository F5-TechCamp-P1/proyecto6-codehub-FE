import React from "react";
import { Page } from "./page/Page";
import { FormProvider } from "./contexts/FormContext";
import { AuthProvider } from "./contexts/AuthContext";
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