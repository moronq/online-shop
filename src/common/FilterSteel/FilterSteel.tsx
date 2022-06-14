import React, {useState} from 'react';
import styles from "./FilterSteel.module.scss";
import arrow from "../../img/icons/arrow-bottom.svg";
import {catalogSlice} from "../../store/catalogSlice";
import {useAppDispatch, useAppSelector} from "../../hook/hook";

type PropsType = {
    forceUpdate: ()=> void
    setCurrentPage: (arg0: number)=>void
}

const FilterSteel: React.FC<PropsType> = ({forceUpdate, setCurrentPage}) => {

    const [isSpoilerActive, setIsSpoilerActive] = useState(false)

    const {checkboxesFilter}= useAppSelector(state => state.catalogPage)
    const {removeSelectedCheckboxes, setSelectedCheckboxes} = catalogSlice.actions
    const dispatch = useAppDispatch()

    const onPriceSpoilerClick = () => {
        setIsSpoilerActive(prev => !prev)
    }

    const handleCheckbox =(e: any, el: string) =>{
        let statusInput = e.target.checked
        statusInput ? dispatch(setSelectedCheckboxes(el)) : dispatch(removeSelectedCheckboxes(el))
        setCurrentPage(1)
        forceUpdate()
    }

    return (
        <div className={styles.filterSteel}>
            <div onClick={onPriceSpoilerClick} className={styles.filterSteelTitleContainer}>
                <p className={styles.filterSteelTitle}>Сталь</p>
                <button className={styles.filterSliderButton}>
                    <img
                        className={`${styles.filterSliderImage} ${isSpoilerActive 
                            ? styles.filterSliderImageOpened : ''}`}
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