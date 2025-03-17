import { Form } from "../form/Form";
import { useForm } from "../../context/FormContext";
import { useAuth } from "../../context/AuthContext";
import { useCategories } from "../../features/useCategories";

export const FormsContainer = () => {
  const { activeForm } = useForm();
  const { handleLogin } = useAuth();
  const {createCategories} = useCategories();

  return (
    <>
      {activeForm === "landing" && <Form type="login" onSubmit={ handleLogin } />}
      {activeForm === "upload" && <Form type="upload" onSubmit={console.log("hola")} />}
      {activeForm === "category" && <Form type="category" onSubmit={createCategories} />}
    </>
  );
};