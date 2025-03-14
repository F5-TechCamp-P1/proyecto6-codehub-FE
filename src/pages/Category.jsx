import React from "react";
import Form from "../components/form/Form";

const CategoryPage = () => {
  return <Form type="category" onSubmit={(data) => console.log("Categoría añadida:", data)} />;
};

export default CategoryPage;