import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchData } from "../services/fetchService";
import { useForm } from "../context/FormContext";


export const useResources = () => {
    const [resources, setResources] = useState([]);
    const {apikey} = useAuth();
    const {setActiveForm} = useForm();

    const getCategoryById = async (id) => {
        console.log(id)
        try {
            const response = await fetchData(`http://localhost:8080/api/resources/${id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": apikey,
                },
            })
            if (!response) throw new Error("Error de autenticación");
            setResources([response])
            setActiveForm("resource");
        } catch (error) {
            console.error(error)
        }
    }

    return {resources, getCategoryById}
}