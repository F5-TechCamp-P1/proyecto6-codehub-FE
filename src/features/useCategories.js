import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchData } from "../services/fetchService";

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

  const createCategories = async (category) => {
    console.log(category)
    try {
      const response = await fetchData("http://localhost:8080/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apikey,
        },
        body: JSON.stringify({name: category})
      });
      if (!response) throw new Error("Error de autenticación");
      setCategories(response)
    } catch (error) {
      console.error("Error logging in: ", error)
    }
  } 
  return { categories, fetchCategories, createCategories };
};
