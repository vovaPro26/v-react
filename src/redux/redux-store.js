import mainContentReducer from "./mainContentReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
const { createStore, combineReducers, compose, applyMiddleware } = require("redux");

let reducers = combineReducers({
    mainContentPage: mainContentReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store