import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
// import { withRouter } from "react-router";
import { setUserProfile } from "redux/mainContentReducer";
import MainContent from "./MainContent";
import RingsLoader from "./../Users/Loading";
import {setFatching} from "redux/usersActions";


let config = {
    headers: {
        "API-KEY": "7c675ba3-383f-4c4d-b75f-3926da812121"
    }
}

const MainContentConteiner = (props) => {
    const params = useParams();
    const userId = params.id;

    const setUserProfile = props.setUserProfile;

    useEffect(() => {
        console.log(userId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, config)
            .then(res => {
                setFatching(false)
                setUserProfile(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [setUserProfile, userId])
// componentDidMount() {
//     const queryParams = new URLSearchParams(window.location.search);

//     // const id = queryParams.get('id');



return (
    <MainContent {...props} profile={props.profile} />
);

}


let mapStateToProps = (state) => ({
    profile: state.mainContentPage.profile
})

export default connect(mapStateToProps, { setUserProfile })(MainContentConteiner)