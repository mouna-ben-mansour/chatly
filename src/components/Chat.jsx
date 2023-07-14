import React from "react";
import Add from "../images/add-user.png";
import Camera from "../images/videocam.png";
import Menu from "../images/menu-vt.png";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
    return (  
        <div className="chat">
            <div className="chat-info">
                <span>Sarra</span>
                <div className="chat-icons">
                    <img src={Camera} alt="" width="25px"></img>
                    <img src={Add} alt="" width="25px"></img>
                    <img src={Menu} alt="" width="25px"></img>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}
 
export default Chat;