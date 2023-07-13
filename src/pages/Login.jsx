import React from "react";
const Login = () => {
    return ( 
        <div className="form-container">
        <div className="form-wrapper">
            <h1 className="logo">CHATLY</h1>
            <span className="title">Login</span>
            <form>
                <input type="email"  placeholder="Email"></input>
                <input type="password"  placeholder="Password"></input>
             <button>Sign in</button>
            </form>
            <p>If you don't have an account? Register</p>
        </div>
    </div> 
     );
}
 
export default Login;