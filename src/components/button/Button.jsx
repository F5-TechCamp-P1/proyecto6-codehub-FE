import "./Button.css"

export const Button = ({action, handleOnClick, label}) => {

    if (label) return (
        <button className="feature-btn" onClick={() => handleOnClick()}>
            <p>Añadir {label} +</p>
        </button>
    )

    return (
        <button className="action-btn" onClick={() => handleOnClick()}>
            <img className="categoryImg" src={`/${action}button.png`} alt="delete button" />
        </button>
    )
}
