import React, {useEffect, useRef, useState} from 'react';
import styles from "./FilterPrice.module.scss";
import arrow from "../../../../../img/icons/arrow-bottom.svg";

const FilterPrice = ({catalog}) => {
    const PRICE_GAP = 100

    const maxPriceItem = catalog.reduce((prev, current) => prev.price > current.price ? prev : current)
    const maxPrice = maxPriceItem.price

    const [isSpoilerActive, setIsSpoilerActive] = useState(false)
    const [minInputValue, setMinInputValue] = useState(0)
    const [maxInputValue, setMaxInputValue] = useState(maxPrice)
    const [minSliderValue, setMinSliderValue] = useState(0)
    const [maxSliderValue, setMaxSliderValue] = useState(maxPrice)

    const progress = useRef(null)

    const onPriceSpoilerClick = () => {
        setIsSpoilerActive(prev => !prev)
    }

    const onInputBlur = (e) => {
        let value = e.target.value
        let className = e.target.className
        if (value === '' && className === styles.inputMin) {
            setMinInputValue('0')
        } else if (value === '' && className === styles.inputMax) {
            setMaxInputValue('0')
        }
    }

    const onFocusInput = (e) => {
        let value = e.target.value
        let className = e.target.className
        if (value === '0' && className === styles.inputMin) {
            setMinInputValue('')
        } else if (value === '0' && className === styles.inputMax) {
            setMaxInputValue('')
        }
    }

    const onRangeMinSlider = (e) => {
        let minVal = e.target.value
        setMinSliderValue(minVal)
        if (maxSliderValue - minVal < PRICE_GAP) {
            setMinSliderValue(+maxSliderValue - PRICE_GAP)
        } else {
            progress.current.style.left = (minVal / e.target.max) * 100 + '%'
            setMinInputValue(minVal);
        }
    }

    const onRangeMaxSlider = (e) => {
        let maxVal = e.target.value
        setMaxSliderValue(maxVal)
        if (maxVal - minSliderValue < PRICE_GAP) {
            setMaxSliderValue(+minSliderValue + PRICE_GAP)
        } else {
            progress.current.style.right = 100 - (maxVal / e.target.max) * 100 + '%'
            setMaxInputValue(maxVal);
        }
    }

    const onInputMin = (e) => {
        let minVal = e.target.value
        if (e.key === 'Enter') {
            if ((maxInputValue - minVal >= PRICE_GAP) && minVal >= 0) {
                progress.current.style.left = (minVal / e.target.max) * 100 + '%'
                setMinSliderValue(+minVal)
            } else if (minVal < 0) {
                progress.current.style.left = 0
                setMinSliderValue(0)
                setMinInputValue(0)
            } else {
                let currentMinValue = minInputValue + PRICE_GAP
                setMinInputValue(currentMinValue);
                progress.current.style.left = (currentMinValue / e.target.max) * 100 + '%'
                setMinSliderValue(currentMinValue)
            }
        }
    }

    const onInputMax = (e) => {
        let maxVal = e.target.value
        if (e.key === 'Enter') {
            if ((maxVal - minInputValue >= PRICE_GAP) && maxVal <= maxPrice) {
                progress.current.style.right = 100 - (maxVal / e.target.max) * 100 + '%'
                setMaxSliderValue(maxVal)
            } else if (maxVal > maxPrice) {
                progress.current.style.right = 0
                setMaxSliderValue(maxPrice)
                setMaxInputValue(maxPrice)
            } else if (maxVal - minInputValue < PRICE_GAP) {
                let currentValue = +minInputValue + PRICE_GAP
                progress.current.style.right = 100 - (currentValue / e.target.max) * 100 + '%'
                setMaxSliderValue(currentValue)
                setMaxInputValue(currentValue)
            }
        }
    }

    return (
        <div className={styles.filterPrice}>
            <div onClick={onPriceSpoilerClick} className={styles.filterTitleContainer}>
                <p className={styles.filterPriceTitle}>Цена</p>
                <button className={styles.filterSliderButton}>
                    <img
                        className={`${styles.filterSliderImage} ${isSpoilerActive ? styles.filterSliderImageOpened : ''}`}
                        src={arrow} alt=""/>
                </button>
            </div>
            <div
                className={`${styles.filterPriceSliderPart} ${isSpoilerActive ? '' : styles.filterPriceSliderPartHidden}`}>
                <div className={styles.filterPriceForm}>
                    <input className={styles.inputMin} type="number" value={minInputValue} max={maxPrice}
                           onBlur={(e) => onInputBlur(e)}
                           onFocus={(e) => onFocusInput(e)}
                           onKeyDown={(e) => onInputMin(e)}
                           onChange={(e) => setMinInputValue(e.target.value)}/>
                    <input className={styles.inputMax} type="number" value={maxInputValue} max={maxPrice}
                           onBlur={(e) => onInputBlur(e)}
                           onFocus={(e) => onFocusInput(e)}
                           onKeyDown={(e) => onInputMax(e)}
                           onChange={(e) => setMaxInputValue(e.target.value)}/>
                </div>
                <div className={styles.filterPriceSlider}>
                    <div ref={progress} className={styles.filterPriceSliderProgress}/>
                </div>
                <div className={styles.rangeInput}>
                    <input type='range' className={styles.rangeMin} min={0} max={maxPrice} value={minSliderValue}
                           step={'100'} onChange={(e) => onRangeMinSlider(e)}/>
                    <input type='range' className={styles.rangeMax} min={0} max={maxPrice} value={maxSliderValue}
                           step={'100'} onChange={(e) => onRangeMaxSlider(e)}/>
                </div>
            </div>
        </div>
    );
};

export default FilterPrice;