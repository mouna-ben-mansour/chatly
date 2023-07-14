import React from "react";
import User from "../images/user.jpg"
const Navbar = () => {
    return ( 
        <div className="navbar">
             <span className="logo">CHATLY</span>
             <div className="user">
                <img src={ User } alt=""/>
                <span> Mouna ben mansour</span>
                <button>logout</button>
             </div>
        </div>
     );
}
 
export default Navbar;