import { useState } from "react";
import { Button } from "../button/Button";
import "./Resource.css";

export const Resource = ({ title, fileUrl, category }) => {
  const [visible, setIsVisible] = useState(true);
  const handleClick = () => {
    if (!visible) {
        setIsVisible(true)
    } else {
        setIsVisible(false);
    }
  };


  return (
    <div className="card">
      {!visible && (
        <div className="delete-container">
            <h1>{category}</h1>
            <h2>Lenguaje de marcado</h2>
            <h2>Resources for {title}</h2>
            <p>Here you can see all resources related to {title}.</p>
          <div className="card-delete">
            <h2 >¿Está seguro de que desea eliminar este contenido?</h2>
            <div className="delete-opts">
                <Button action="delete" />
                <Button action="reject" handleOnClick={handleClick}/>
            </div>
          </div>
        </div>
      )}
      {visible && (
        <>
          <div className="card-header">
            <div className="card-icons">
              <Button action="delete" handleOnClick={handleClick} />
              <Button action="edit" />
            </div>
            <h2>{title}</h2>
          </div>
          <div className="card-split">
            <div className="card-column">
            <h2>HTML</h2>
              <p>
                {fileUrl}
              </p>
            </div>
            <div className="card-center">
              <img className="categoryImg" src="/htmltutorial.png" alt="resource example" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
