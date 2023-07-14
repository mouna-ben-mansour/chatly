import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
          await  signInWithEmailAndPassword(auth, email, password);
          navigate('/');
        } catch (err) {
           setError(true);
        }
    }
    return ( 
        <div className="form-container">
        <div className="form-wrapper">
            <h1 className="logo">CHATLY</h1>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email"  placeholder="Email"></input>
                <input type="password"  placeholder="Password"></input>
             <button>Sign in</button>
             {error && <span>Something went wrong</span>}
            </form>
            <p>If you don't have an account? <Link to="/register">Register</Link></p>
          
        </div>
    </div> 
     );
}
 
export default Login;