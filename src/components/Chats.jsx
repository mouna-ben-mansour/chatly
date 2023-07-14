import React from "react";
import User from "../images/user.jpg"
const Chats = () => {
    return ( 
        <div className="chats">
            <div className="user-chat">
                <img src={ User } alt=""/>
                <div className="user-info">
                    <span>Abdallah</span>
                    <p>Hello!</p>
                </div>
            </div>
            <div className="user-chat">
                <img src={ User } alt=""/>
                <div className="user-info">
                    <span>Abdallah</span>
                    <p>Hello!</p>
                </div>
            </div>
            <div className="user-chat">
                <img src={ User } alt=""/>
                <div className="user-info">
                    <span>Abdallah</span>
                    <p>Hello!</p>
                </div>
            </div>
        </div>
     );
}
 
export default Chats;