import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { fetchData } from "../services/dataService";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const { apikey, isLogged } = useAuth();

  useEffect(() => {
    if (isLogged && apikey) { 
      fetchCategories();
    }
  }, [isLogged, apikey]);

  const fetchCategories = async () => {
    console.log("Login:", apikey);
    try {
      console.log("API Key en useCategories:", apikey);
      const response = await fetchData("http://localhost:8080/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apikey,
        },
      });
      if (!response) throw new Error("Error de autenticación");
      console.log(response)
      setCategories(response || []);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return { categories, fetchCategories };
};
