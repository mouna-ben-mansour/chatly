import React from "react";
import UploadImage from "../images/send-image.png";
import UploadFile from "../images/attached.png";

const Input = () => {
    return ( 
        <div className="input-send">
            <input type="text" placeholder="write a message"/>
            <div className="send">
                <img src="" alt=""></img>
                <label htmlFor="file">
                    <img src={ UploadFile } alt=""></img>
                </label>
                <input style={{ display:"none"}}  type="file" id="file"></input>
                <label htmlFor="image">
                    <img src={ UploadImage } alt=""></img>
                </label>
                <input style={{ display:"none"}}  type="file" id="image"></input>
                <button>Send</button>
            </div>
        </div>
     );
}
 
export default Input;