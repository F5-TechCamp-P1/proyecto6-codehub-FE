import { useState, useEffect } from "react";
import { fetchData } from "../services/dataService";
import { useForm } from "../contexts/FormContext";

export const useLogin = () => {

const [isLogged, setIsLogged] = useState(false);
const [apikey, setApikey] = useState("");
const [categories, setCategories] = useState([]);
const { setActiveForm } = useForm();

/*   useEffect(() => {
    const loadData = async () => {
        const userData = await fetchData();
        setIsLogged(userData.isAuthenticated);
        setCategories(userData.categories || []);
    };
    loadData();
}, []);
 */
  const handleLogin = async (username, password) => {
    console.log("Login:", username, password);
    try {
        const response = await fetchData("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response) throw new Error("Error de autenticación");

        setIsLogged(true);
        setActiveForm(false);
        return await response.json();
    } catch (error) {
        console.error("Error logging in:", error);
    }
  };

  return { isLogged, handleLogin, categories, apikey };

};
