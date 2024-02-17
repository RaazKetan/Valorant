import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav>
            <span>DH</span>
            <section>
                <li>Game Info</li>
                <li>Agent</li>
                <li>Specs</li>
                <li>Score</li>
                <li>Support</li>
                <li>Article</li>
                <li>Media</li>
            </section>
            <button>Play Game</button>
        </nav>
    )
};
export default Navbar;