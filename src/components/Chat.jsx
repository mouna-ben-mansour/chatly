import React, {  useContext } from "react";
import Add from "../images/add-user.png";
import Camera from "../images/videocam.png";
import Menu from "../images/menu-vt.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
    const { data } = useContext(ChatContext);
    return (  
        <div className="chat">
            <div className="chat-info">
                <span>{data.user?.displayName}</span>
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