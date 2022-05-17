import React from 'react';

type CommentsPropsType = {
    name: string
    body: string
}

const Comments: React.FC<CommentsPropsType> = ({name, body}) => {
    return (
        <div>
            <img src="" alt=""/>
            <div>
                <p>{name}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;