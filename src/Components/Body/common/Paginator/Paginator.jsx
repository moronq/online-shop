import React, {useState} from 'react';
import styles from './Paginator.module.scss'
import cn from 'classnames'
import {useSelector} from "react-redux";


let MIN_PORTION_SIZE = 5

const Paginator = ({totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize = MIN_PORTION_SIZE}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionCount = (portionNumber - 1) * portionSize + 1
    let rightPortionCount = portionNumber * portionSize

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.paginatorContainer}>
            <div className={styles.paginator}>
                {portionNumber > 1 &&
                <button className={styles.paginatorButton} onClick={() => setPortionNumber(portionNumber - 1)}>
                    <svg className={styles.paginatorButtonBackIcon} width="16" height="10" viewBox="0 0 16 10"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.11323 9.2309L0.324654 2.00808C-0.107404 1.54862 -0.107404 0.803689 0.324655 0.344454C0.756329 -0.114819 1.45646 -0.114819 1.8881 0.344454L7.89495 6.73553L13.9016 0.34464C14.3334 -0.114632 15.0335 -0.114632 15.4652 0.34464C15.897 0.803913 15.897 1.54881 15.4652 2.00827L8.6765 9.23108C8.46056 9.46072 8.17784 9.57541 7.89498 9.57541C7.61199 9.57541 7.32906 9.4605 7.11323 9.2309Z"
                            fill="black"/>
                    </svg>
                </button>}
                <ul className={styles.pages}>
                    {pages.filter(p => p >= leftPortionCount && p <= rightPortionCount)
                        .map(el => {
                            return <li
                                className={cn({[styles.pageSelectorActive]: currentPage === el},
                                    styles.pageSelector)}
                                key={el} onClick={() => setCurrentPage(el)}>{el}</li>
                        })}
                </ul>
                {portionNumber < portionCount &&
                <button className={styles.paginatorButton} onClick={() => setPortionNumber(portionNumber + 1)}>
                    <svg className={styles.paginatorButtonForwardIcon} width="16" height="10" viewBox="0 0 16 10"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.11323 9.2309L0.324654 2.00808C-0.107404 1.54862 -0.107404 0.803689 0.324655 0.344454C0.756329 -0.114819 1.45646 -0.114819 1.8881 0.344454L7.89495 6.73553L13.9016 0.34464C14.3334 -0.114632 15.0335 -0.114632 15.4652 0.34464C15.897 0.803913 15.897 1.54881 15.4652 2.00827L8.6765 9.23108C8.46056 9.46072 8.17784 9.57541 7.89498 9.57541C7.61199 9.57541 7.32906 9.4605 7.11323 9.2309Z"
                            fill="black"/>
                    </svg>
                </button>}
            </div>
        </div>

    );
};

export default Paginator;