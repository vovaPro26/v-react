import React from "react";
import { connect } from "react-redux";
import { addMessagesActionCreator, updateMessagesTextActionCreator } from "redux/dialogsReducer";
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        newTextMessages: state.dialogsPage.newTextMessages,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps =(dispatch) => { 
    
    return{
        onSendMessageClick: (userId) => {
            dispatch(addMessagesActionCreator(userId))
        },
        onMessageChange: (messages) => {
            dispatch(updateMessagesTextActionCreator(messages))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer