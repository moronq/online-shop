import React, {useState} from 'react';
import styles from "../Body.module.scss";
import arrow from "../../../img/icons/arrow-bottom.svg";

const FilterPrice = () => {

    let [isSpoilerActive, setIsSpoilerActive] = useState(false)

    const onPriceSpoilerClick = () => {
        setIsSpoilerActive(prev => !prev)
    }

    return (
        <div className={styles.filterPrice}>
            <div onClick={onPriceSpoilerClick} className={styles.filterTitleContainer}>
                <p className={styles.filterPriceTitle}>Цена</p>
                <button className={styles.filterSliderButton}>
                    <img className={`${styles.filterSliderImage} ${isSpoilerActive ? styles.filterSliderImageOpened : ''}`} src={arrow} alt=""/>
                </button>
            </div>
            <div className={`${styles.filterPriceSliderPart} ${isSpoilerActive ? '' : styles.filterPriceSliderPartHidden}`}>
                <form className={styles.filterPriceForm} action="">
                    <input className={styles.filterPriceInputLeft} type="text"/>
                    <input className={styles.filterPriceInputRight} type="text"/>
                </form>
                <div className={styles.filterPriceScrollContainer}>
                    <span className={styles.filterPriceBarOrange}/>
                    <span className={styles.filterPriceBarBlack}/>
                    <span className={styles.filterPriceLeftCircle}/>
                    <span className={styles.filterPriceRightCircle}/>
                </div>
            </div>
        </div>
    );
};

export default FilterPrice;