import { Form } from "../form/Form";
import { useForm } from "../../contexts/FormContext";
import { useAuth } from "../../contexts/AuthContext";

export const FormsContainer = () => {
  const { activeForm } = useForm();
  const { handleLogin } = useAuth();

  return (
    <div>
      {activeForm === "landing" && <Form type="login" onSubmit={ handleLogin } />}
      {activeForm === "upload" && <Form type="upload" onSubmit={(data) => console.log("Contenido subido:", data)} />}
      {activeForm === "category" && <Form type="category" onSubmit={(data) => console.log("Categoría añadida:", data)} />}
    </div>
  );
};