import React from "react";
import ReactDOM  from "react-dom";
import classes from './Navbar.module.css';

const Nav = () => {
    return(
        <nav className={classes.navbar}>
            <span className={classes["nav-Head"]} >DH</span>
            <section className={classes["nav-sec"]}>
                <li>Game Info</li>
                <li>Agent</li>
                <li>Specs</li>
                <li>Score</li>
                <li>Support</li>
                <li>Article</li>
                <li>Media</li>
            </section>
            <button className={classes.btnPlay}>Play Game</button>
        </nav>
    )
}
const Navbar = () => {
    return(
        <React.Fragment>
       {ReactDOM.createPortal(<Nav/>, document.getElementById('nav'))}
        </React.Fragment>
    )
};
export default Navbar;