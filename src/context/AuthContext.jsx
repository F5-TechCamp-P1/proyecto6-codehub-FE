import { createContext, useState, useContext } from "react";
import { fetchData } from "../services/fetchService";
import { useForm } from "./FormContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [apikey, setApikey] = useState("");
  const { setActiveForm } = useForm();

  const handleLogin = async (username, password) => {
    console.log("Login:", username, password);
    try {
      const response = await fetchData("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response) throw new Error("Error de autenticación");

      console.log("✅ API Key recibida:", response);
      setApikey(response.apiKey);
      setIsLogged(true);
      setActiveForm(false);
    } catch (error) {
      console.error("❌ Error logging in:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogged, apikey, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);