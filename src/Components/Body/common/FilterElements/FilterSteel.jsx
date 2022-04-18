import React, {useState} from 'react';
import styles from "../../Body.module.scss";
import arrow from "../../../../img/icons/arrow-bottom.svg";
import {useSelector} from "react-redux";

const FilterSteel = () => {

    let [isSpoilerActive, setIsSpoilerActive] = useState(false)

    const checkboxesFilter = useSelector(state => state.catalogPage.checkboxesFilter)

    const onPriceSpoilerClick = () => {
        setIsSpoilerActive(prev => !prev)
    }

    return (
        <div className={styles.filterSteel}>
            <div onClick={onPriceSpoilerClick} className={styles.filterSteelTitleContainer}>
                <p className={styles.filterSteelTitle}>Сталь</p>
                <button className={styles.filterSliderButton}>
                    <img
                        className={`${styles.filterSliderImage} ${isSpoilerActive ? styles.filterSliderImageOpened : ''}`}
                        src={arrow} alt=""/>
                </button>
            </div>
            <div

                className={styles.filterSteelSpoilerPart}>
                <ul className={`${styles.filterSteelList} ${isSpoilerActive ? '' : styles.filterSteelListHidden}`}>
                    {checkboxesFilter.map((el, index)=>{
                        return (
                            <li key={index} className={styles.filterSteelItem}>
                                <input className={styles.filterSteelCheckbox} type="checkbox" id={el} name={el}/>
                                <label className={styles.filterSteelLabel} htmlFor={el}>{el}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FilterSteel;