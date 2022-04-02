import {SET_USER_DATA } from 'redux/store'

// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }       
        default:
            return state
    };
}

export function setAuthUserData(id, email,login) {
    return {
        type: SET_USER_DATA,
        data: {id, email,login}
    }
}

export default authReducer