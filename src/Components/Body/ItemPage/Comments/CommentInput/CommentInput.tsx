import React, {FC, useState} from 'react';
import CommonButton from "../../../../../common/CommonButton/CommonButton";
import styles from './CommentInput.module.scss'
import {useAppDispatch} from "../../../../../hook/hook";
import {addItemComments} from "../../../../../store/commentsSlice";

type CommentInputType = {
    itemId: string
}

const CommentInput: FC<CommentInputType> = ({itemId}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [commentText, setComment] = useState('')

    const dispatch = useAppDispatch()

    const onSubmitButtonClick = () => {
        dispatch(addItemComments({itemId,commentText,name,email}))
        setName('')
        setEmail('')
        setComment('')
    }

    return (
        <section className={styles.commentInputContainer}>
            <form className={styles.commentInputForm}>
                <div className={styles.commentLabelFormItem}>
                    <label className={styles.labelName} htmlFor="name">Ваше имя:</label>
                    <label className={styles.labelEmail} htmlFor="email">Ваш email:</label>
                    <label className={styles.labelComment} htmlFor="comment">Ваш отзыв:</label>
                </div>
                <div className={styles.commentInputFormItem}>
                    <input className={styles.commentInput} value={name}
                           onChange={(e)=>setName(e.currentTarget.value)} name="name"
                           id="name" placeholder="Иван Иванов"/>
                    <input className={styles.commentInput} value={email}
                           onChange={(e)=>setEmail(e.currentTarget.value)} name="email"
                           id="email" placeholder="example@gmail.com"/>
                    <textarea className={styles.commentInput + ' ' + styles.commentText} value={commentText}
                              onChange={(e)=>setComment(e.currentTarget.value)} name="comment"
                              id="comment" placeholder="Оставьте отзыв о товаре"/>
                </div>
            </form>
            <div className={styles.buttonContainer}>
                <CommonButton onClickFn={onSubmitButtonClick}>Отправить отзыв</CommonButton>
            </div>
        </section>
    );
};

export default CommentInput;