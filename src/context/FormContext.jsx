import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [activeForm, setActiveForm] = useState("landing");
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <FormContext.Provider value={{ activeForm, setActiveForm, selectedCategory, setSelectedCategory }}>
            {children}
        </FormContext.Provider>
    );

}

export const useForm = () => useContext(FormContext);