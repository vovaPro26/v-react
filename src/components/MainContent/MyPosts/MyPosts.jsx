import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";



function MyPosts(props) {


    let newPostElement = React.createRef();

    function  onAddPost()  {
        props.addPost()
        //props.dispatch(addPostActionCreator())
        newPostElement.current.value = ''
    }
    
    let onPostChange = () => {
        let text  = newPostElement.current.value
        props.onPostChange(text)
        //props.dispatch(updatePostTextActionCreator(text))
    }

    return (
        <div className={classes.mainContent} >
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            <button onClick={onAddPost}>Add post</button>
            {props.posts.map((n, i) => {
                return (
                        <Post key={i} post={n}/>   
                )}
            )
            }
        </div>
    );
}


export default MyPosts


