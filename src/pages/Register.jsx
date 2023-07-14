
import React, { useState } from "react";
import Add from "../images/upload-img.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            await uploadBytesResumable(storageRef, file).then(()=> {
                getDownloadURL(storageRef).then( async(downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        });
                        // Add a new document in collection "users"
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                         // Add a new document in collection "userChats"
                         await setDoc(doc(db, "userChats", res.user.uid), {});
                         navigate('/');
                    } catch (error) {
                        console.log(error)
                        setError(true);
                    }
                  
                });
            });

        } catch (err) {
            setError(true);
        }
    }
    return ( 
        <div className="form-container">
            <div className="form-wrapper">
                <h1 className="logo">CHATLY</h1>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Display name"></input>
                    <input type="email"  placeholder="Email"></input>
                    <input type="password"  placeholder="Password"></input>
                    <label htmlFor="file">
                        <img src={Add} alt="" width="25px"></img>
                        <span>Add an avatar</span>
                    </label>
                    <input style={{ display:"none"}}  type="file" id="file"></input>
                    <button>Sign up</button>
                    {error && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? <Link to="/login">Login</Link></p>
            </div>
        </div> 
    );
}
 
export default Register;