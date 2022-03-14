import axios from "axios";
import React from "react";
import styles from "./users.module.css";

let firstTime = false

class UsersC extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0 && firstTime === false) {
            firstTime = true
            let config = {
                headers: {
                    "app-id": "622c90ed0c658a104837b2b0"
                }
            }

            axios.get("https://dummyapi.io/data/v1/user?limit=1000", config)
                .then(res => {
                    const data = res.data.data.map((usr) => {
                        return { ...usr, fullName: `${usr.title}. ${usr.firstName} ${usr.lastName}` }
                    })
                    this.props.setUsers(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    render () {
        return <div className={styles.users}>
        {!this.props.users.length && (
        <div className={styles.getUsersButtonDiv} >
            <button className={styles.getUsersButton} onClick={this.getUsers}>GetUsers</button>
        </div>
        )}
        {
            this.props.users.map(u => <div className={styles.user} key={u.id}>
                <span>
                    <div>
                        <img alt="lol" src={u.picture} className={styles.userPhoto} />
                    </div>
                    <span>
                        <span className={styles.userName}>
                            <div>{u.fullName}</div>
                        </span>
                        {/* <span>
                    <div>{u.lokation.countre}</div>
                    <div>{u.lokation.city}</div>
                </span> */}
                    </span>
                    <div>
                        {u.followed ?
                            <button onClick={() => { this.props.unFollow(u.id) }} >Follow</button> :
                            <button onClick={() => { this.props.follow(u.id) }}>unFollow</button>}
                    </div>
                </span>
            </div>)
        }
    </div>
    }
}


export default UsersC