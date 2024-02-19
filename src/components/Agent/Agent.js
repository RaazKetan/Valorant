import React from "react";
import classes from "./Agent.module.css";
const Agent = (props) => {
    return(
        <li className={classes.list}>
            <img src={props.image} alt={props.name} className={classes.image} />
            <div>
            <h1 className={classes.name}>{props.name}</h1>
            <h1 className={classes.desc}>{props.description}</h1>
            </div>
            
        </li>
    );
};
export default Agent;