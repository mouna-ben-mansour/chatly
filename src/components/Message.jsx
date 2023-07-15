import React, { useEffect, useContext ,useRef} from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({message}) => {
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);

    const ref = useRef();

    useEffect(()=>{
        ref.current?.scrollIntoView({behavior:'smooth'})
    },[message])

    return ( 
        <div ref= {ref} className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
            <div className="message-info">
                <img src={ message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL } alt=""/>
                <span>just now</span>
            </div>
            <div className="message-content">
                <p>{message.text}</p>
                {message.image && <img src={ message.image} alt=""/>}
            </div>
        </div>
     );
}
 
export default Message;