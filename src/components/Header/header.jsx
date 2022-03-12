import React from "react";
import classes from './header.module.css'

function Header() {
    return (
        <header className={classes.header} >
            <img src="bmw.svg" className="img" alt="vovkas" ></img>
        </header>
    );
}

export default Header