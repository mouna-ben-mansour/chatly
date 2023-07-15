import React, { useState, useContext } from "react";
import { doc, updateDoc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../firebase";
import UploadImage from "../images/send-image.png";
import UploadFile from "../images/attached.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Input = () => {
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);
    const [ text, setText ] = useState('');
    const [ image, setImage ] = useState(null);

    const handleSend = async() => {
        if (image) {
            const storageRef = ref(storage, uuid())
            await uploadBytesResumable(storageRef, image).then(()=> {
                getDownloadURL(storageRef).then( async(downloadURL) => {

                           // Atomically add a new region to the "regions" array field.
                            await updateDoc(doc(db, "chats", data.chatId), {
                                messages: arrayUnion({
                                    id: uuid(),
                                    image: downloadURL,
                                    senderId: currentUser.uid,
                                    date: Timestamp.now()
                                })
                            });

                  
                });
            });
        } else {
            // Atomically add a new region to the "messages" array field.
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now()

                })
            });
            
        }
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp(),
        })
        await updateDoc(doc(db, 'userChats', data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp(),
        })
        setText("");
        setImage(null);
    };
    return ( 
        <div className="input-send">
            <input type="text" 
            placeholder="write a message" 
            onChange={e=> setText(e.target.value)}
            defaultValue={text} 
            />
            <div className="send">
                <img src="" alt=""></img>
                <label htmlFor="file">
                    <img src={ UploadFile } alt=""></img>
                </label>
                <input style={{ display:"none"}}  type="file" id="file" onChange={e=> setImage(e.target.files[0])}></input>
                <label htmlFor="image">
                    <img src={ UploadImage } alt=""></img>
                </label>
                <input style={{ display:"none"}}  type="file" id="image" ></input>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
     );
}
 
export default Input;