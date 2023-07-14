import React from "react";
import User from "../images/user.jpg"
const Message = () => {
    return ( 
        <div className="message owner">
            <div className="message-info">
                <img src={ User } alt=""/>
                <span>just now</span>
            </div>
            <div className="message-content">
                <p>Good morning!</p>
                <img src={ User } alt=""/>
            </div>
        </div>
     );
}
 
export default Message;