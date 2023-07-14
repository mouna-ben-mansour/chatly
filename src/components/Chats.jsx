import React, { useState , useContext, useEffect } from "react";
import { doc, onSnapshot  } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import User from "../images/user2.jpg"
const Chats = () => {
    const [chats, setChats] = useState([]);
    const [err,setErr] = useState(false);
    const { currentUser } = useContext(AuthContext);

    useEffect (() => {
       const getChats = () => {
            try {
                const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                    console.log("Current data: ", doc.data());
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


    return ( 
        <div className="chats">
            {
                Object.entries(chats)?.map((chat) => (
                    <div className="user-chat" key={chat[0]}>
                        <img src={ chat[1].userInfo.photoURL } alt=""/>
                        <div className="user-info">
                            <span>{chat[1].userInfo.displayName}</span>
                            <p>{chat[1].userInfo.lastMessage?.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Chats;