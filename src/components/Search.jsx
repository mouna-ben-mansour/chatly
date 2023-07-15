import React, { useState , useContext } from "react";
import { doc, collection, query, where, getDocs, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err,setErr] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const handleSearch = async() => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("displayName", "==", username));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setUser(doc.data());
            });
            
        } catch (error) {
            setErr(true);
        }

    }
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    // when select user 
    const handleSelect = async () => {
        // check whether the group ( chats in firestore ) exists, if not just create new one

        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid ;
        //create user chats
        try {
            const res = await getDoc(doc(db, "chats", combinedId));
            if(!res.exists()) {
                await setDoc(doc(db, "chats", combinedId), { messages: []});
                await updateDoc (doc(db, "userChats", currentUser.uid),{
                    [combinedId + ".userInfo"]: {
                        uid:user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()

                })
                await updateDoc (doc(db, "userChats", user.uid),{
                    [combinedId + ".userInfo"]: {
                        uid:currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()

                })
            } 
        } catch (err) {}
        setUser(null);
        setUsername('');

    }
    return ( 
        <div className="search">
            <div className="search-form">
                <input type="text" placeholder="Find a user" onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} value={username}/>
            </div>
            {err && <span>{err}</span>}
            {user && <div className="user-chat" onClick={handleSelect}>
                <img src={ user.photoURL } alt=""/>
                <div className="user-info">
                    <span>{user.displayName}</span>
                    <p>Hello!</p>
                </div>
            </div>}
        </div>
     );
}
 
export default Search;