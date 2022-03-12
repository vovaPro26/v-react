import React from "react";
import classes from './MainContent.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";



function MainContent(props) {



    return (
        <div className={classes.mainContent} >
            <div>
                <div className={classes.rushaGoAway}>Руский корабль иди нах**</div>
            </div>
            <div className={classes.mainContent}>
                <img alt="lol" src="palm.png" />
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default MainContent