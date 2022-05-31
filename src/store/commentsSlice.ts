import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentType} from "../types/types";
import {CommentsAPI} from "../api/api";

type initialStateType = {
    status: 'idlk' | 'loading' | 'succeeded' | 'failed'
    comments: Array<CommentType>
    error: string
}

const initialState: initialStateType = {
    status: 'idlk',
    comments: [],
    error: ''
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async (itemId: number, thunkAPI) => {
    try {
        return await CommentsAPI.getComments(itemId)
    } catch (e) {
        return thunkAPI.rejectWithValue('Не удалось загрузить отзывы =(')
    }
})
export const addItemComments = createAsyncThunk('comments/addComments',
    async ({itemId,commentText,name,email}: {itemId:string, commentText:string, name:string, email:string },
           thunkAPI, ) => {
    const comment = {
        postId: parseInt(itemId),
        id: 34,
        name: name,
        email: email,
        body: commentText,
    }
    try {
        return await CommentsAPI.addComments(comment)
    } catch (e) {
        return thunkAPI.rejectWithValue('Не удалось отправить отзывы =(')
    }
})


export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        nullStatus: (state)=>{
            state.status = 'idlk'
            state.comments = []
        }
    },
    extraReducers: {
        [fetchComments.pending.type]:(state) => {
            state.status = 'loading'
        },
        [fetchComments.fulfilled.type]: (state, action: PayloadAction<Array<CommentType>>) => {
            state.status = 'succeeded'
            if (action.payload.length > 0){
                state.comments = action.payload
            }
        },
        [fetchComments.rejected.type]:(state, action: PayloadAction<string>)=>{
            state.status = 'failed'
            state.error = action.payload
        },
        [addItemComments.fulfilled.type]:(state, action: PayloadAction<CommentType>) => {
            state.comments = state.comments.concat(action.payload)
        },
    }
})

export default commentsSlice.reducer