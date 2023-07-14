import React from "react";
import User from "../images/user.jpg"
const Search = () => {
    return ( 
        <div className="search">
            <div className="search-form">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="user-chat">
                <img src={ User } alt=""/>
                <div className="user-info">
                    <span>Abdallah</span>
                    <p>Hello!</p>
                </div>
            </div>
        </div>
     );
}
 
export default Search;