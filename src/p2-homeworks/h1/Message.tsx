import React from 'react'
import s from "./Message.module.css"

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props : MessagePropsType) {
    return (
        <div>
            <div className={s.container}>
                <img src={props.avatar} alt="Аватар"/>
                    <p>{props.name}</p>
                    <p>{props.message}</p>
                    <span className={s.timeRight}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
