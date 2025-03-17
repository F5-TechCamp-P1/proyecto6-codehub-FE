import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [activeForm, setActiveForm] = useState("landing");

    return (
        <FormContext.Provider value={{ activeForm, setActiveForm }}>
            {children}
        </FormContext.Provider>
    );

}

export const useForm = () => useContext(FormContext);