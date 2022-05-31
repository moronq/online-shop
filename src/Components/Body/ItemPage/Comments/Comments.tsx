import React, {FC, useState} from 'react';
import styles from "./Comments.module.scss";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import CommentInput from "./CommentInput/CommentInput";

type CommentsType = {
    content: React.ReactNode,
    itemId: string
}

const Comments: FC<CommentsType> = ({content,itemId}) => {

    const [showInput, setShowInput] = useState(false)
    const onButtonClick = () => {
        setShowInput(true)
    }

    return (
        <section className={styles.commentsWrapper}>
            <div className={styles.commentsTitleWrapper}>
                <h4 className={styles.commentsTitle}>Отзывы</h4>
                {showInput || <CommonButton onClickFn={onButtonClick}>Написать отзыв</CommonButton>}
            </div>
            {showInput && <CommentInput itemId={itemId}/>}
            <span className={styles.commentsLine}/>
            <ul className={styles.commentsList}>
                {content}
            </ul>
        </section>
    );
};

export default Comments;