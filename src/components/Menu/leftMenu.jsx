import React from "react";
import { NavLink } from "react-router-dom";
import classes from './leftMenu.module.css'



function Components() {



    const menuItems = [
        { name: "Profile", link: "profile" },
        { name: "Messages", link: "messages" },
        { name: "News", link: "news" },
        { name: "Music", link: "music" },
        { name: "Settings", link: 'settings' },
        { name: "Math", link: "https://polite-river-02a6d3703.azurestaticapps.net/", isNewTab: true }
    ]

    return (
        <nav className={classes.leftMenu}>
            {menuItems.map((mi, i) => {
                return (
                    <div key={i}>
                        <NavLink
                            className={({ isActive }) => isActive ? classes.leftMenuItem_Active : classes.leftMenuItem }
                            to={mi.link}                            
                        >
                            {mi.name}
                        </NavLink>
                    </div>
                )
            })}
            {/* <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a> News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a> Settings</a>
            </div> */}
        </nav>
    );
}

export default Components