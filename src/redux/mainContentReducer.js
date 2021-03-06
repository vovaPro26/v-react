import { ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT } from 'redux/store'

// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    mainItems: [
        { name: "item" },
        { name: "Message" },
        { name: "1 post" },
        { name: "2 post" }
    ],
    newPostText: "",
    profile: null
}

function mainContentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                name: state.newPostText
            }
            return {
                ...state,
                mainItems: [...state.mainItems, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    };
}

export function addPostActionCreator() {
    return {
        type: ADD_POST
    }
}

export function setUserProfile (profile) {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export function updatePostTextActionCreator(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

// if(action.type === ADD_POST) {
//     let newPost = {
//       name: state.newPostText  
//     }
//     state.mainItems.push(newPost)
//     state.newPostText = ""
//   }
//   else if(action.type === UPDATE_NEW_POST_TEXT){
//     state.newPostText=action.newText
//   }

// return state
// }

export default mainContentReducer