import axios from "axios";
import react from "react"
import { follow, setFatching, unfollow } from "redux/usersActions";
import { BASE_API_URL, API_KEY } from "shared/constants";

const request = axios.create({
    withCredentials: true,
    baseURL: BASE_API_URL,
    headers: {
        'API-KEY': API_KEY
    }
});

let config = {
    headers: {
        "API-KEY": "7c675ba3-383f-4c4d-b75f-3926da812121"
    },
    withCredentials: true
}

export const usersAPI = {
    GetUsers(currentPage = 1, pageSize = 10) {
        return request.get(`users?page=${currentPage}&count=${pageSize}`, config)
            .then(res => {
                return res.data
            })
    },
    follow(id){
            setFatching(true)
            return request.post(`follow/${id}`)
    },
    unFollow(id){
        setFatching(true)
        return request.delete(`follow/${id}`)
    }
}
