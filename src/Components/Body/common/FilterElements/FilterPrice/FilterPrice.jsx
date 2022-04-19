import React, {useEffect, useRef, useState} from 'react';
import styles from "./FilterPrice.module.scss";
import arrow from "../../../../../img/icons/arrow-bottom.svg";
import {useDispatch, useSelector} from "react-redux";
import {setMaxInputValue, setMinInputValue} from "../../../../../redux/catalogReducer";

const FilterPrice = () => {
    const PRICE_GAP = 100

    const minInputValue = useSelector(state => state.catalogPage.minInputValue)
    const maxInputValue = useSelector(state => state.catalogPage.maxInputValue)
    const MIN_PRICE = useSelector(state=>state.catalogPage.MIN_PRICE)
    const MAX_PRICE = useSelector(state=>state.catalogPage.MAX_PRICE)

    const dispatch = useDispatch()

    const [isSpoilerActive, setIsSpoilerActive] = useState(false)

    const [minSliderValue, setMinSliderValue] = useState(MIN_PRICE)
    const [maxSliderValue, setMaxSliderValue] = useState(MAX_PRICE)

    const progress = useRef(null)

    const onPriceSpoilerClick = () => {
        setIsSpoilerActive(prev => !prev)
    }

    const onInputBlur = (e) => {
        let value = e.target.value
        let className = e.target.className
        if (value === '' && className === styles.inputMin) {
            dispatch(setMinInputValue(0))
        } else if (value === '' && className === styles.inputMax) {
            dispatch(setMaxInputValue(0))
        }
    }

    const onFocusInput = (e) => {
        let value = e.target.value
        let className = e.target.className
        if (value === '0' && className === styles.inputMin) {
            dispatch(setMinInputValue(''))
        } else if (value === '0' && className === styles.inputMax) {
            dispatch(setMaxInputValue(''))
        }
    }

    const onRangeMinSlider = (e) => {
        let minVal = e.target.value
        setMinSliderValue(minVal)
        if (maxSliderValue - minVal < PRICE_GAP) {
            setMinSliderValue(+maxSliderValue - PRICE_GAP)
        } else {
            progress.current.style.left = ((minVal-MIN_PRICE) / (MAX_PRICE-MIN_PRICE)) * 100 + '%'
            dispatch(setMinInputValue(minVal));
        }
    }

    const onRangeMaxSlider = (e) => {
        let maxVal = e.target.value
        setMaxSliderValue(maxVal)
        if (maxVal - minSliderValue < PRICE_GAP) {
            setMaxSliderValue(+minSliderValue + PRICE_GAP)
        } else {
            progress.current.style.right =((MAX_PRICE-maxVal) / (MAX_PRICE-MIN_PRICE)) * 100 + '%'
            dispatch(setMaxInputValue(maxVal));
        }
    }

    const onInputMin = (e) => {
        let minVal = e.target.value
        if (e.key === 'Enter') {
            if ((maxInputValue - minVal >= PRICE_GAP) && minVal >= MIN_PRICE) {
                progress.current.style.left = ((minVal-MIN_PRICE) / (MAX_PRICE-MIN_PRICE)) * 100 + '%'
                setMinSliderValue(+minVal)
            } else if (minVal < MIN_PRICE) {
                progress.current.style.left = 0
                setMinSliderValue(MIN_PRICE)
                dispatch(setMinInputValue(MIN_PRICE))
            } else {
                let currentMinValue = minInputValue + PRICE_GAP
                dispatch(setMinInputValue(currentMinValue))
                progress.current.style.left = ((currentMinValue-MIN_PRICE) / (MAX_PRICE-MIN_PRICE)) * 100 + '%'
                setMinSliderValue(currentMinValue)
            }
        }
    }

    const onInputMax = (e) => {
        let maxVal = e.target.value
        if (e.key === 'Enter') {
            if ((maxVal - minInputValue >= PRICE_GAP) && maxVal <= MAX_PRICE) {
                progress.current.style.right =((MAX_PRICE-maxVal) / (MAX_PRICE-MIN_PRICE)) * 100 + '%'
                setMaxSliderValue(maxVal)
            } else if (maxVal > MAX_PRICE) {
                progress.current.style.right = 0
                setMaxSliderValue(MAX_PRICE)
                dispatch(setMaxInputValue(MAX_PRICE))
            } else if (maxVal - minInputValue < PRICE_GAP) {
                let currentValue = +minInputValue + PRICE_GAP
                progress.current.style.right = ((MAX_PRICE-currentValue) / (MAX_PRICE-MIN_PRICE)) * 100 + '%'
                setMaxSliderValue(currentValue)
                dispatch(setMaxInputValue(currentValue))
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
            <div className={styles.filterPriceSliderPart}>
                <div className={`${styles.filterPriceSliderList} ${isSpoilerActive? '' : styles.filterPriceSliderListHidden}`}>
                    <div className={styles.filterPriceForm}>
                        <input className={styles.inputMin} type="number" value={minInputValue} max={MAX_PRICE} min={MIN_PRICE}
                               onBlur={(e) => onInputBlur(e)}
                               onFocus={(e) => onFocusInput(e)}
                               onKeyDown={(e) => onInputMin(e)}
                               onChange={(e) => dispatch(setMinInputValue(e.target.value))}/>
                        <input className={styles.inputMax} type="number" value={maxInputValue} max={MAX_PRICE} min={MIN_PRICE}
                               onBlur={(e) => onInputBlur(e)}
                               onFocus={(e) => onFocusInput(e)}
                               onKeyDown={(e) => onInputMax(e)}
                               onChange={(e) => dispatch(setMaxInputValue(e.target.value))}/>
                    </div>
                    <div className={styles.filterPriceSlider}>
                        <div ref={progress} className={styles.filterPriceSliderProgress}/>
                    </div>
                    <div className={styles.rangeInput}>
                        <input type='range' className={styles.rangeMin} min={MIN_PRICE} max={MAX_PRICE} value={minSliderValue}
                               step={'100'} onChange={(e) => onRangeMinSlider(e)}/>
                        <input type='range' className={styles.rangeMax} min={MIN_PRICE} max={MAX_PRICE} value={maxSliderValue}
                               step={'100'} onChange={(e) => onRangeMaxSlider(e)}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FilterPrice;