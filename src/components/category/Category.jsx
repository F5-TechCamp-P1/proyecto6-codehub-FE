import { useState } from "react";
import { Button } from "../button/Button";
import "./Category.css";

export const Category = ({ title, handleOnClick, id }) => {
  const [visible, setIsVisible] = useState(true);


  const handleClick = () => {
    if (!visible) {
        setIsVisible((prev) => !prev);
  }};

  return (
    <div className="card">
      {!visible && (
        <div className="delete-container">
          <div className="card-delete">
            <h2 >¿Está seguro de que desea eliminar la categoría "{title}"?</h2>
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
            <Button action="access-resource" handleOnClick={() => handleOnClick(id)} />
          </div>

          <div className="card-split">
            <div className="card-column">
            <h2>HTML</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit non assumenda provident enim totam aperiam sint
                itaque?
              </p>
            </div>
            <div className="card-center">
              <img className="categoryImg" src="/htmlfile.png" alt="category example" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
