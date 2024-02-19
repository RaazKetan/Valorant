import React from "react";
import AgentList from "../AgentList/AgentList";
import classes from './Popup.module.css';

const PopUp = (props)=>{
    return(
        <React.Fragment>
            <div className={classes.popup}>
                <div>
                    <button className={classes.x} 
                    onClick={props.closePopUp}
                    >X</button>
                </div>
            <AgentList agents = {props.agents} className= {classes.age}/>
            </div>
        </React.Fragment>
    )
}
export default PopUp;