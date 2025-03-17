import "./Header.css";
import { useForm } from "../../contexts/FormContext";

export const Header = () => {
  const {setActiveForm } = useForm();

  return (
    <header className="bg-dark">
      <nav className="nav">
        <div>
          <button onClick={() => setActiveForm(false)} className="logo-button">
            <img src="/logo.png" alt="Logo" />
          </button>
        </div>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Java</p>
        <div>
          <img src="/user.png" alt="user profile" />
        </div>
      </nav>
    </header>
  );
};