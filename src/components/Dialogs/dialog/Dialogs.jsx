import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Dialogs.module.css"


function Dialogs(props) {

    
    

    return (
        <div className={classes.dialogs_content}>
            <div className={classes.dialogs}>
                {props.dialogs.map((mi, i) => {
                    return (
                        <NavLink key={i} to={mi.link} >
                            <div className={`${classes.dialog} ${mi.isActive ? classes.dialog_Active : classes.dialog}`} key={i}>
                                {mi.name}
                                
                            </div>
                        </NavLink>
                    )
                })}
            </div>
            <Outlet/>
            
        </div>
    );
}

export default Dialogs