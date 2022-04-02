import { usersAPI } from 'api/api'
import { FOLLOW, SET_CURRENT_PAGE, SET_USERS, TOOGLE_IS_FATCHING, UNFOLLOW} from 'redux/store'

// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"



export function follow(userId) {
    return {
        type: FOLLOW,
        userId
    }
}
export function unfollow(userId) {
    return {
        type: UNFOLLOW,
        userId
    }
}
export function setUsers(users, total) {
    return {
        type: SET_USERS,
        users,
        total
    }
}
export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export function setFatching(isFatching) {
    return {
        type: TOOGLE_IS_FATCHING,
        isFatching
    }
}

let firstTime = false

let config = {
    headers: {
        "API-KEY": "7c675ba3-383f-4c4d-b75f-3926da812121"
    },
    withCredentials:true
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return(dispatch) => {
        
            dispatch(setFatching(true))
            firstTime = true
            
            usersAPI.GetUsers(currentPage, pageSize).then(data => {
                dispatch(setFatching(false))
                const dataRes = data.items.map((usr) => {
                    return { ...usr, fullName: `${usr.name}.` }
                })
                dispatch(setUsers(dataRes, data.totalCount))
            })
            .catch(err => {
                console.log(err)
                dispatch(setFatching(false))
            })
        }
    }

    export const followThunkCreator = (userId) => {
        return(dispatch) => {
            
                dispatch(setFatching(true))
                firstTime = true
                
                usersAPI.GetUsers(userId).then(data => {
                    dispatch(setFatching(false))
                    dispatch(follow(userId))
                })
                .catch(err => {
                    console.log(err)
                    dispatch(setFatching(false))
                })
            }
        }
        
        export const unFollowThunkCreator = (userId) => {
            return(dispatch) => {
                
                    dispatch(setFatching(true))
                    firstTime = true
                    
                    usersAPI.GetUsers(userId).then(data => {
                        dispatch(setFatching(false))
                        dispatch(unfollow(userId))
                    })
                    .catch(err => {
                        console.log(err)
                        dispatch(setFatching(false))
                    })
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

