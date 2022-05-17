import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CommentType} from "../types/types";
import {CommentsAPI} from "../api/api";

type initialStateType = {
    status: 'idlk' | 'loading' | 'succeeded' | 'failed'
    comments: Array<CommentType> | string
    error: string
}

const initialState: initialStateType = {
    status: 'idlk',
    comments: [],
    error: ''
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        nullStatus: (state)=>{
            state.status = 'idlk'
            state.comments = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchComments.fulfilled, (state, action: any) => {
                state.status = 'succeeded'
                if (action.payload.length > 0){
                    state.comments = state.comments.concat(action.payload)
                } else {
                    state.comments = 'Нет отзывов'
                }
            })
            .addCase(fetchComments.rejected, (state, action: any)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const fetchComments = createAsyncThunk('comments/fetchComments', async (itemId: number) => {
    return await CommentsAPI.getComments(itemId)
})

export default commentsSlice.reducer