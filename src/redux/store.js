// import dialogsReducer from "./dialogsReducer"
// import mainContentReducer from "./mainContentReducer"
// import sidebarReducer from "./sidebarReducer"

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

export const UPDATE_NEW_MESSAGES_TEXT = "UPDATE_NEW_MESSAGES_TEXT"
export const SEND_MESSAGES = "SEND_MESSAGES"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE ="SET_CURRENT_PAGE"
export const TOOGLE_IS_FATCHING ="TOOGLE_IS_FATCHING"
export const TOOGLE_IS_FOLLOWING_PROGRESS ="TOOGLE_IS_FOLLOWING_PROGRESS"

export const SET_USER_DATA = "SET_USER_DATA"



// let store = {
  
//   _state: {
//     mainItemsPage : {
//       mainItems: [
//         { name: "item" },
//         { name: "Message" },
//         { name: "1 post" },
//         { name: "2 post" }   
//       ],
//       newPostText: ""
//     },
        
//     dialogsPage : {
  
//       dialogs: [
//         { name: "Mom", link: "1", isActive: true },
//         { name: "Dad", link: "2" },
//         { name: "Vita", link: "3" },
//         { name: "Ulia", link: "4" }
//       ],
      
//       messages :[
//         { userId: 1, messege: "Hi, how are you" },
//         { userId: 3, messege: "So you have so small buget, and you can't afford it." },
//         { userId: 2, messege: "Huh you so poor. Hahahahhhahah :)" }
//       ],
//       newTextMessages: ""
//     },
//     sidebar: {}
//   },
//   getState() {
//     return this._state
//   },

//   callSubscriber() {
//   },

//   subscribe(observer) {
//     this.callSubscriber = observer
//   },
//   dispatch(action) {
//     this._state.mainItemsPage = mainContentReducer(this._state.mainItemsPage, action)
//     this._state.dialogsPagePage = dialogsReducer(this._state.dialogsPage, action)
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//     this.callSubscriber(this._state)
//   }
// }







// // export default store




// // let state = {
// //   mainItemsPage : {
// //     mainItems: [
// //       { name: "item" },
// //       { name: "Message" },
// //       { name: "1 post" },
// //       { name: "2 post" }   
// //     ],
// //     newPostText: ":)"
// //   },
      
// //   dialogsPage : {

// //     dialogs: [
// //       { name: "Mom", link: "1", isActive: true },
// //       { name: "Dad", link: "2" },
// //       { name: "Vita", link: "3" },
// //       { name: "Ulia", link: "4" }
// //     ],
    
// //     messages :[
// //       { userId: 1, messege: "Hi, how are you" },
// //       { userId: 3, messege: "So you have so small buget, and you can't afford it." },
// //       { userId: 2, messege: "Huh you so poor. Hahahahhhahah :)" }
// //     ]
// //   }
// // }