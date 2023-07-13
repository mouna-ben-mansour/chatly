import React from "react";
import Add from "../images/addAvatar.png";
import { Link } from "react-router-dom";
const Register = () => {
    return ( 
        <div className="form-container">
            <div className="form-wrapper">
                <h1 className="logo">CHATLY</h1>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Display name"></input>
                    <input type="email"  placeholder="Email"></input>
                    <input type="password"  placeholder="Password"></input>
                    <label htmlFor="file">
                        <img src={Add} alt="" width="25px"></img>
                        <span>Add an avatar</span>
                    </label>
                    
                    <input style={{ display:"none"}}  type="file" id="file"></input>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? 
                    <Link to="/login">Login</Link></p>
            </div>
        </div> 
    );
}
 
export default Register;