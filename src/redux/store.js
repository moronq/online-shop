import catalogReducer from "./catalogReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


let reducers = combineReducers({
    catalogPage: catalogReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store