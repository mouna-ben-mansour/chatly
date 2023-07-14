import React from "react";
import Add from "../images/addAvatar.png";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
    return (  
        <div className="chat">
            <div className="chat-info">
                <span>Mouna</span>
                <div className="chat-icons">
                    <img src={Add} alt="" width="25px"></img>
                    <img src={Add} alt="" width="25px"></img>
                    <img src={Add} alt="" width="25px"></img>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}
 
export default Chat;