import React from "react";
import { NavLink } from "react-router-dom";
import classes from './header.module.css'

function Header(props) {
    return (
        <header className={classes.header} >
            <img src="bmw.svg" className="img" alt="vovkas" ></img>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header