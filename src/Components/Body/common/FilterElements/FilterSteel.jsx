import React, {useState} from 'react';
import styles from "../../Body.module.scss";
import arrow from "../../../../img/icons/arrow-bottom.svg";

const FilterSteel = () => {


    let [isSpoilerActive, setIsSpoilerActive] = useState(false)

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
                    <li className={styles.filterSteelItem}>
                        <input className={styles.filterSteelCheckbox} type="checkbox" id="100Х13М" name="100Х13М"/>
                        <label className={styles.filterSteelLabel} htmlFor="100Х13М">100Х13М</label>
                    </li>
                    <li className={styles.filterSteelItem}>
                        <input className={styles.filterSteelCheckbox} type="checkbox" id="95Х18" name="95Х18"/>
                        <label htmlFor="95Х18">95Х18</label>
                    </li>
                    <li className={styles.filterSteelItem}>
                        <input className={styles.filterSteelCheckbox} type="checkbox" id="ELMAX" name="ELMAX"/>
                        <label htmlFor="ELMAX">ELMAX</label>
                    </li>
                    <li className={styles.filterSteelItem}>
                        <input className={styles.filterSteelCheckbox} type="checkbox" id="К340" name="К340"/>
                        <label htmlFor="К340">К340</label>
                    </li>
                    <li className={styles.filterSteelItem}>
                        <input className={styles.filterSteelCheckbox} type="checkbox" id="М390" name="М390"/>
                        <label htmlFor="М390">М390</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterSteel;