import React, { useState , useContext, useEffect } from "react";
import { doc, onSnapshot  } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
    const [chats, setChats] = useState([]);
    const [err,setErr] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    useEffect (() => {
       const getChats = () => {
            try {
                const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                    setChats(doc.data());
                });
                // clean data
                return ( () => {unsub()})
                
            } catch (error) {
                setErr(true);
            }
       }
       currentUser.uid && getChats();
    },[currentUser.uid])

    const handleSelect = (u) => {
        dispatch({type:"CHANGE_USER", payload: u})
    }


    return ( 
        <div className="chats">
            {
                Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
                    <div className="user-chat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
                        <img src={ chat[1].userInfo.photoURL } alt=""/>
                        <div className="user-info">
                            <span>{chat[1].userInfo.displayName}</span>
                            <p>{chat[1].lastMessage?.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Chats;