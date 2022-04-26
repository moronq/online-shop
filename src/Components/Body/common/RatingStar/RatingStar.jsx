import React, {useCallback, useRef, useState} from 'react';
import styles from "./RatingStar.module.scss";
import {useDispatch} from "react-redux";

const RatingStar = ({id, rating, setRating}) => {
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])

    const dispatch = useDispatch()

    let arr = [1, 2, 3, 4, 5]

    let onChangeRating = (e) => {
        dispatch(setRating(id, parseInt(e.target.value)))
        forceUpdate()
    }

    let ratingArr = arr.map((el, index) => {
        return <React.Fragment key={index}>
            <input className={styles.ratingInput} type="radio" name={id} id={`rating-${id}-${el}`}
                   value={el} aria-label={el}
                   onBlur={(e) => e.preventDefault()}
                   onChange={(e) => {
                       onChangeRating(e)
                   }} checked={el === rating}/>
            <label className={styles.ratingStar} aria-label={el} htmlFor={`rating-${id}-${el}`}/>
        </React.Fragment>
    })

    return (
        <div className={styles.ratingWrapper}>
            <fieldset className={styles.rating}>
                <legend className={styles.ratingCaption}>Рейтинг</legend>
                <div className={styles.ratingGroup}>
                    {ratingArr}
                </div>
            </fieldset>
        </div>
    )
};

export default RatingStar;