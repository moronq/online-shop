import catalogReducer from "./catalogReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


let rootReducers = combineReducers({
    catalogPage: catalogReducer,
})

let store = createStore(rootReducers, applyMiddleware(thunk))

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
window.store = store

export default store