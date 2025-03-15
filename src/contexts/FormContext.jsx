import { createContext, useState, useContext } from "react";
const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [activeForm, setActiveForm] = useState("landing");

    return (
        <FormContext.Provider value={{ activeForm, setActiveForm }}>
            {children}
        </FormContext.Provider>
    );

}

export { FormContext, FormProvider };
export const useForm = () => useContext(FormContext);