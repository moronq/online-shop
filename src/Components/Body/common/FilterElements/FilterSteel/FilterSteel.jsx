import React, {useState} from 'react';
import styles from "../../../Body.module.scss";
import arrow from "../../../../../img/icons/arrow-bottom.svg";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedCheckboxes, setSelectedCheckboxes} from "../../../../../redux/catalogReducer";

const FilterSteel = ({forceUpdate}) => {

    let [isSpoilerActive, setIsSpoilerActive] = useState(false)

    const checkboxesFilter = useSelector(state => state.catalogPage.checkboxesFilter)
    const dispatch = useDispatch()

    const onPriceSpoilerClick = () => {
        setIsSpoilerActive(prev => !prev)
    }

    const handleCheckbox =(e, el)=>{
        let statusInput = e.target.checked
        statusInput ? dispatch(setSelectedCheckboxes(el)) : dispatch(removeSelectedCheckboxes(el))
        forceUpdate()
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
            <div className={styles.filterSteelSpoilerPart}>
                <ul className={`${styles.filterSteelList} ${isSpoilerActive ? '' : styles.filterSteelListHidden}`}>
                    {checkboxesFilter.map((el, index)=>{
                        return (
                            <li key={index} className={styles.filterSteelItem}>
                                <input className={styles.filterSteelCheckbox} type="checkbox" id={el} name={el}
                                onChange={(e)=>handleCheckbox(e, el)}/>
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