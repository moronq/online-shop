import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import styles from './ItemPage.module.scss'
import BreadCrumbs from "../../../common/BreadCrumbs/BreadCrumbs"
import {ParamsType} from "../../../types/types";
import {useAppDispatch, useAppSelector} from "../../../hook/hook";
import CommentsItem from "./Comments/CommentsItem/CommentsItem";
import {commentsSlice, fetchComments} from "../../../store/commentsSlice";
import Comments from "./Comments/Comments";
import Preview from "./Preview/Preview";
import ItemInfo from "./ItemInfo/ItemInfo";

const ItemPage = () => {

    const itemId = useParams<ParamsType>()
    const dispatch = useAppDispatch()
    const {status, comments, error} = useAppSelector(state => state.comments)
    const {nullStatus} = commentsSlice.actions

    useEffect(()=>{
        if(status === 'idlk'){
            dispatch(fetchComments(parseInt(itemId.id as string)))
        }
        window.scrollTo({
            top: 0,
        })
        return ()=>{
            dispatch(nullStatus())
        }
    },[])

    let content: React.ReactNode

    if(status === 'loading'){
        content = <p>Загрузка...</p>
    } else if (status === 'succeeded') {
        if(comments.length > 0){
            const commentList = comments.filter((el)=>{
                return el.postId === parseInt(itemId.id as string)
            })
            content = commentList.reverse().map((el)=><CommentsItem key={el.id} name={el.name} body = {el.body}/>)
        } else {
            content = <p>У данного товара нет отзывов. Станьте первым, кто оставил отзыв об этом товаре!</p>
        }
    } else if(status === 'failed'){
        content = <p>{error}</p>
    }

    return (
        <div className={styles.itemPageContainer}>
            <div className={styles.breadCrumbsContainer}>
                <BreadCrumbs/>
            </div>
            <div className={styles.itemInfoWrapper}>
                <Preview/>
                <ItemInfo itemId={itemId.id}/>
            </div>
            <Comments content={content} itemId={itemId.id as string}/>
        </div>
    );
};

export default ItemPage;