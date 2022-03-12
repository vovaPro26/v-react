import mainContentReducer from "./mainContentReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer";
const { createStore, combineReducers, compose } = require("redux");

let reducers = combineReducers({
    mainContentPage: mainContentReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

let store = createStore(reducers, composeEnhancers())
export default store