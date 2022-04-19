import React, {useState} from 'react';
import styles from "./FilterSort.module.scss";

const FilterSort = ({sortCatalogByOption, setSortCatalogByOption}) => {

    const [isSpoilerActive, setIsSpoilerActive] = useState(false)
    const onSpoilerClick = () => {
        setIsSpoilerActive(prev => !prev)
    }

    const onOptionClick = (e) => {
        setSortCatalogByOption(e.target.value)
        setIsSpoilerActive(false)
    }

    return (
        <div className={styles.bodySort}>
            <button onClick={onSpoilerClick}
                    className={styles.chooseOptionButton}>{sortCatalogByOption === 'popular' ? 'По популярности' : sortCatalogByOption === 'price_up'
                ? 'По возрастанию цены' : sortCatalogByOption === 'price_down' ? 'По убыванию цены'
                    : ''}
                <svg className={`${styles.arrowButton} ${isSpoilerActive ? styles.arrowButtonRotated : ''}`} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.11323 9.2309L0.324654 2.00808C-0.107404 1.54862 -0.107404 0.803689 0.324655 0.344454C0.756329 -0.114819 1.45646 -0.114819 1.8881 0.344454L7.89495 6.73553L13.9016 0.34464C14.3334 -0.114632 15.0335 -0.114632 15.4652 0.34464C15.897 0.803913 15.897 1.54881 15.4652 2.00827L8.6765 9.23108C8.46056 9.46072 8.17784 9.57541 7.89498 9.57541C7.61199 9.57541 7.32906 9.4605 7.11323 9.2309Z" fill="#8a8a8a"/>
                </svg>
            </button>
            <div className={styles.spoilerContainer}>
                <div className={`${styles.filterSortDropdown} ${isSpoilerActive ? '' : styles.hidden}`}>
                    <input onClick={(e)=>onOptionClick(e)} className={styles.option} id={'popular'} type={'radio'} name={'where'} value={'popular'}/>
                    <label className={styles.selectItem} htmlFor="popular">По популярности</label>

                    <input onClick={(e)=>onOptionClick(e)} className={styles.option} id={'price_up'} type={'radio'} name={'where'} value={'price_up'}/>
                    <label className={styles.selectItem} htmlFor="price_up">По возрастанию цены</label>

                    <input onClick={(e)=>onOptionClick(e)} className={styles.option} id={'price_down'} type={'radio'} name={'where'}
                           value={'price_down'}/>
                    <label className={styles.selectItem} htmlFor="price_down">По убыванию цены</label>
                </div>
            </div>
        </div>
    );
};

export default FilterSort;