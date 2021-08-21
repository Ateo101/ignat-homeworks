import React from 'react'
import './Message.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={"Message"}>
            <div className={"message-avatar"}><img src={props.avatar}/></div>
            <div className={"message-container"}>
                <div className={"message-username"}>{props.name}</div>
                <div className={"message-text"}>{props.message}</div>
                <div className={"message-time"}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
