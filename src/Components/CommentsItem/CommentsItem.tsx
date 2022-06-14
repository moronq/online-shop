import React from 'react';
import user from '../../img/icons/user-image-profile.webp'
import styles from './CommentsItem.module.scss'

type CommentsPropsType = {
    name: string
    body: string
}

const CommentsItem: React.FC<CommentsPropsType> = ({name, body}) => {
    return (
        <li className={styles.commentItem}>
            <img className={styles.userProfileImage} src={user} alt="user-image" width={'80px'} height={'80px'}/>
            <div className={styles.commentBodyContainer}>
                <p className={styles.userName}>{name}</p>
                <p className={styles.commentBody}>{body}</p>
            </div>
        </li>
    );
};

export default CommentsItem;