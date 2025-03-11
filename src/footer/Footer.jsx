import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const users = [
    { name: "Alejandro Arias", url: "https://github.com/AlejandroAriasSL" },
    { name: "Grigory Vladimiro", url: "https://github.com/Grigory-Vladimiro" },
    { name: "Juan Esteban Castro", url: "https://github.com/juancastro000" },
    { name: "Mabel Rincon", url: "https://github.com/MabelRincon" },
    { name: "Marta Bernardo", url: "https://github.com/MartaBernardoZamora"},
    { name: "Naudelyn Lucena", url: "https://github.com/NaudelynLucena" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2025 Code Hub Bootcamp Repository. Todos los derechos reservados.</p>
        <div className="footer-links">
          {users.map((user, index) => (
            <a key={index} href={user.url} target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaGithub className="github-icon" />{user.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
