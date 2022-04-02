import React from "react";
import cl from "./Post.module.css"

function Post(props) {
    return (
        <div>
            <div >
                <img className={cl.imgPost} src={props.picture} alt="ava" ></img>
                {props.post.name}
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post