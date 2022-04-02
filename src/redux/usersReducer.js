import { usersAPI } from 'api/api'
import { 
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_USERS,
    TOOGLE_IS_FATCHING,
    UNFOLLOW,
} from 'redux/store'

// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFatching: true
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users, totalUsersCount: action.total }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOOGLE_IS_FATCHING: {
            return { ...state, isFatching: action.isFatching }
        }
        default:
            return state
    };
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

export default usersReducer