import React from "react";
// import classes from "./PopUp.module.css";

const PopUp = ()=>{
    return(
        <React.Fragment>
            <div className="popup">
                <div className="popup__content">
                    <h2>Agent Name</h2>
                    <p>Agent Description</p>
                    {/* <img src="" alt="Agent Image"/> */}
                    <button>Close</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PopUp;