import React, { useState, useContext ,useEffect} from "react";
import { doc, onSnapshot  } from "firebase/firestore";
import { db } from "../firebase";

import { ChatContext } from "../context/ChatContext";
import User from "../images/user.jpg";
const Message = ({message}) => {
    const { data } = useContext(ChatContext);
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