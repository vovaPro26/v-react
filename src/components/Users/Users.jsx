import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./users.module.css";
import { BASE_API_URL, API_KEY } from "shared/constants";
import { usersAPI } from "api/api";


function Users(props) {
    const request = axios.create({
        withCredentials: true,
        baseURL: BASE_API_URL,
        headers: {
            'API-KEY': API_KEY
        }
    });

    const onFollowClick = (id) => {
        props.followThunkCreator(id)
    }

    const onUnFollowClick = (id) => {
        props.unFollowThunkCreator(id)
    }

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.users}>
            <div>
                {pages.map((p) => {
                    return <span    
                        key={p}
                        className={props.currentPage === p ? styles.selectedPage : "" } 
                        onClick={(e) => { props.onPageChanged(p) }} >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div className={styles.user} key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id} >
                                <img alt="lol" src={u.picture} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <span>
                            <span className={styles.userName}>
                                <div>{u.fullName}</div>
                            </span>
                        </span>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.setFatching(true)
                                    onUnFollowClick(u.id)
                                }} >
                                    unFollow
                                </button> :
                                <button onClick={() => {
                                    props.setFatching(true)
                                    onFollowClick(u.id)
                                }}>
                                    Follow
                                </button>}
                        </div>
                    </span>
                </div>)
            }
        </div>
    )
}


export default Users