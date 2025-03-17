import "./Header.css";
import { useForm } from "../../context/FormContext";

export const Header = () => {
  const {setActiveForm } = useForm();

  return (
    <header className="bg-dark">
      <nav className="nav">
          <button onClick={() => setActiveForm(false)} className="logo-button">
            <img className="icon" src="/logo.png" alt="Logo" />
          </button>
        <div className="nav-links">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Java</p>
        </div>
        <div>
          <img className="icon" src="/user.png" alt="user profile" />
        </div>
      </nav>
    </header>
  );
};