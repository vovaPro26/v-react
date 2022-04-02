import RingsLoader from "components/Users/Loading";
import React from "react";
// import { useParams } from "react-router-dom";
import classes from './MainContent.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";




function MainContent(props) {

    if(!props.profile) {
        return <RingsLoader/>
    }

    return (
        <div className={classes.mainContent} >
            <div className={classes.mainContent}>
                <img alt="lol" src="palm.png" />
            </div>
            <img alt="lol" src={props.profile.picture}/>
            <div>{props.profile.fullName}</div>
            <MyPostsContainer  />
        </div>
    );
}

export default MainContent