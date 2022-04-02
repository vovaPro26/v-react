import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow,followThunkCreator,getUsersThunkCreator,setCurrentPage, setFatching, setUsers, unfollow, unFollowThunkCreator } from "redux/usersActions";
import Users from "./Users";
import RingsLoader from "./Loading";
// import { usersAPI } from "api/api";



let firstTime = false
// this.props.currentPage,this.props.pageSize
// let config = {
//     headers: {
//         "API-KEY": "7c675ba3-383f-4c4d-b75f-3926da812121"
//     },
//     withCredentials:true
// }
class UsersAPIComponent extends React.Component {
    componentDidMount = () => {
        if (this.props.users.length === 0 && firstTime === false) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (p) => {

        this.props.getUsersThunkCreator(p , this.props.pageSize)
        this.props.setCurrentPage(p)
    }

    render() {
        return <>
            {this.props.isFatching ? <RingsLoader/> : null }
            <Users {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching
    }

}




const UsersConteiner = connect(mapStateToProps, {
    follow,
    unFollowThunkCreator,
    followThunkCreator,
    getUsersThunkCreator,
    unfollow,
    setUsers,
    setCurrentPage,
    setFatching
})(UsersAPIComponent)

export default UsersConteiner
