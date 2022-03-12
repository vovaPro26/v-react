import { FOLLOW, SET_USERS, UNFOLLOW } from 'redux/store'

// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    users: []
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                 ...state,
                  users: state.users.map( u=>{
                      if(u.id === action.userId){
                        return {...u,followed:true}
                      }
                      return u
                  })
                 }
        case UNFOLLOW:
            return {
                ...state,
                 users: state.users.map( u=>{
                     if(u.id === action.userId){
                       return {...u,followed: false}
                     }
                     return u
                 })
                }
                case SET_USERS: {
                    return {...state, users: [...state.users ,...action.users]}
                }
        default:
            return state
    };
}

export function followAC(userId) {
    return {
        type: FOLLOW,
        userId
    }
}
export function unfollowAC(userId) {
return {
        type: UNFOLLOW,
        userId
    }
}
export function setUsersAC(users) {
    return {
            type: SET_USERS,
            users
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

export default usersReducer