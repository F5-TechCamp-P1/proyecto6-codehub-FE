import "./Category.css"

export const Category = () => {

    return (
       <div className="card">
        <div className="card-header">
            <div className="card-icons">
                <button>
                    <img src="/deletebutton.png" alt="delete button" />
                </button>
                <button>
                    <img src="/editbutton.png" alt="edit button" />
                </button>
            </div>
            <h2>FRONTEND</h2>
        </div>
        <div className="card-split">
            <div className="card-column">
                <h2>HTML</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non assumenda provident enim totam aperiam sint itaque?</p>
            </div>
            <div className="card-center">
                <img src="/htmlfile.png" alt="category example" />
            </div>
        </div>
       </div> 
    )
}