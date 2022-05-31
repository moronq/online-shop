import React from 'react';
import styles from "./CommonButton.module.scss";

type ButtonType = {
    children: React.ReactNode
    onClickFn?: ()=>void
}

const CommonButton: React.FC<ButtonType> = ({children, onClickFn}) => {

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (onClickFn){
            onClickFn()
        }
    }

    return (
        <button className={styles.buyOneClickButton} onClick={(e)=>onButtonClick(e)}>
            <span className={styles.buyOneClickButtonText}>
                {children}
            </span>
        </button>
    );
};

export default CommonButton;