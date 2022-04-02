import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthUserData } from "redux/authReducer";
import Header from "./Header";
import classes from './header.module.css'

let config = {
    headers: {
        'API-KEY': "7c675ba3-383f-4c4d-b75f-3926da812121"
    },
    withCredentials:true
}

function HeaderConteiner(props) {
    useEffect(() => {
        axios.get( `https://social-network.samuraijs.com/api/1.0/auth/me`,config  )
            .then(res => {
                if(res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    props.setAuthUserData(id,email,login )
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
            <Header {...props} />        
        );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {

        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = () => {}

export default connect(mapStateToProps,{setAuthUserData})(HeaderConteiner)