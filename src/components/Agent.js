import React from "react";

const Agent = (props) => {
    return(
        <li>
            <h1>{props.name}</h1>
            <br></br>
            <h1>{props.description}</h1>
            {/* <h3>{props.type}</h3> */}
            <img src={props.image} alt={props.name} />
            
        </li>
    );
};
export default Agent;