import "./Button.css"

export const Button = ({action, handleOnClick}) => {

    return (
        <button className="action-btn" onClick={() => handleOnClick()}>
            <img className="categoryImg" src={`/${action}button.png`} alt="delete button" />
        </button>
    )
}

export default Button