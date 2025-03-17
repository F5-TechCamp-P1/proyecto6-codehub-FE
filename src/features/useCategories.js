import { useState } from "react";
import { useLogin } from "./useLogin";
import { fetchData } from "../services/dataService";

export const useCategories = () => {
  const [categories, setCategories] = useState("");
  const { apikey } = useLogin();

  const fetchCategories = async () => {
    console.log("Login:", apikey);
    try {
      const response = await fetchData("http://localhost:8080/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apikey,
        },
      });
      if (!response) throw new Error("Error de autenticación");
      const data = await response
      setCategories(data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return { categories, fetchCategories };
};
