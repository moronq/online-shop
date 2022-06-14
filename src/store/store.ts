import catalogReducer from "./catalogSlice";
import commentsReducer from "./commentsSlice";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";


let rootReducer = combineReducers({
    catalogPage: catalogReducer,
    comments: commentsReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch


// @ts-ignore
window.store = store

export default store