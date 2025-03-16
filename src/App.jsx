import React from "react";
import { Page } from "./page/Page";
import "./App.css";
import { FormProvider } from "./contexts/FormContext";

function App() {
  return (

    <FormProvider>
    <Page />
    </FormProvider>

  );
}

export default App;