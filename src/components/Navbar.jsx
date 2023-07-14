import React from "react";
import User from "../images/user.jpg"
import { auth } from '../firebase'
const Navbar = () => {
    return ( 
        <div className="navbar">
             <span className="logo">CHATLY</span>
             <div className="user">
                <img src={ User } alt=""/>
                <span> Mouna ben mansour</span>
                <button onClick={()=> auth.signOut()}>logout</button>
             </div>
        </div>
     );
}
 
export default Navbar;