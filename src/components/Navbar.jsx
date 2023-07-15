import React, { useContext } from "react";
import User from "../images/user.jpg"
import { auth } from '../firebase'
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
   const { currentUser } = useContext(AuthContext);
    return ( 
        <div className="navbar">
             <span className="logo">CHATLY</span>
             <div className="user">
                <img src={ User } alt=""/>
                <span> { currentUser.displayName }</span>
                <button onClick={()=> auth.signOut()}>logout</button>
             </div>
        </div>
     );
}
 
export default Navbar;