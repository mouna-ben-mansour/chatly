import React, { useState, useContext ,useEffect} from "react";
import { doc, onSnapshot  } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message"
import { ChatContext } from "../context/ChatContext";
const Messages = () => {
    const [messages, setMessages] = useState([])
    const { data } = useContext(ChatContext);
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
          doc.exists() && setMessages(doc.data().messages);
        });
    
        return () => {
          unSub();
        };
      }, [data.chatId]);
    return ( 
        <div className="messages">
            {messages.map((msg) => ( <Message message={msg} key={msg.id}/>))}
        </div>
     );
}
 
export default Messages;