import React from "react";
import { useParams } from "react-router-dom";



export default function Messages(props) {
    let params = useParams();
    const userId = parseInt(params.id);

    function onMessageChange(e) {
        let messages = e.target.value
        // props.store.dispatch(updateMessagesTextActionCreator(messages))
        props.onMessageChange(messages)
    }

    function onSendMessageClicked() {
        props.onSendMessageClick(userId)
    }

    return (
        <div >
            {props.messages.filter(mess => mess.userId === userId).map((mi, i) => {
                return (
                    <div key={i}>
                        {mi.messege}
                    </div>
                )
            })}
            <div>
                <div><textarea onChange={onMessageChange} value={props.newTextMessages} placeholder="Enter your messages" ></textarea></div>
                <div><button onClick={onSendMessageClicked} >Sent</button></div>
            </div>
        </div>
    );
}