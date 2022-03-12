import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updatePostTextActionCreator } from "redux/mainContentReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.mainContentPage.mainItems,
        newPostText: state.mainContentPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updatePostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer


