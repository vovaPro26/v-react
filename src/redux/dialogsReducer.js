const UPDATE_NEW_MESSAGES_TEXT = "UPDATE_NEW_MESSAGES_TEXT"
const SEND_MESSAGES = "SEND_MESSAGES"


let initialState = {
    dialogs: [
        { name: "Mom", link: "1", isActive: true },
        { name: "Dad", link: "2" },
        { name: "Vita", link: "3" },
        { name: "Ulia", link: "4" }
    ],

    messages: [
        { userId: 1, messege: "Hi, how are you" },
        { userId: 3, messege: "So you have so small buget, and you can't afford it." },
        { userId: 2, messege: "Huh you so poor. Hahahahhhahah :)" }
    ],
    newTextMessages: ""
}


function dialogsReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_NEW_MESSAGES_TEXT:
            return {
                ...state,
                newTextMessages: action.newMessagesBody
            }
        //copyState.newTextMessages = action.newMessagesBody

        case SEND_MESSAGES:
            let newMessagesBody = state.newTextMessages
            return {
                ...state,
                messages: [...state.messages, { userId: action.id, messege: newMessagesBody }],
                newTextMessages: ''
            }
        default:
            return state
    }
}

export function addMessagesActionCreator(userId) {
    return {
        type: SEND_MESSAGES,
        id: userId
    }
}
export function updateMessagesTextActionCreator(text) {
    return {
        type: UPDATE_NEW_MESSAGES_TEXT,
        newMessagesBody: text
    }
}




//     if (action.type === ) {
//     }
//     else if (action.type === ) {

//     }

//     return state

// }

export default dialogsReducer
