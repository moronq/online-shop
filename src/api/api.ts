import {AxiosResponse} from "axios";
import {CommentType} from "../types/types";


const axios = require('axios').default

export const CommentsAPI = {
    getComments: (itemId: number) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}/comments`)
            .then((response:AxiosResponse<Array<CommentType>>) => response.data)
    },
    addComments: (initialPost:CommentType) =>{
        return axios.post(`https://jsonplaceholder.typicode.com/posts`, initialPost)
            .then((response:AxiosResponse) => response.data)
    }
}