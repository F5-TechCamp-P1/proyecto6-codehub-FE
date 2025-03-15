import Form from "../form/Form";
import { useForm } from "../../contexts/FormContext";

const FormsContainer = () => {
  const { activeForm } = useForm();

  return (
    <div>
      {activeForm === "landing" && <Form type="login" onSubmit={() => console.log("Usuario autenticado")} />}
      {activeForm === "upload" && <Form type="upload" onSubmit={(data) => console.log("Contenido subido:", data)} />}
      {activeForm === "category" && <Form type="category" onSubmit={(data) => console.log("Categoría añadida:", data)} />}
    </div>
  );
};


export default FormsContainer;