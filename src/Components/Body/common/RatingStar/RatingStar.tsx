import React, {useCallback, useState} from 'react';
import styles from "./RatingStar.module.scss";
import {useDispatch} from "react-redux";
import { SetRatingType } from '../../../../redux/catalogReducer';

type PropsType = {
    id: number
    rating: number
    setRating: (id:number, rating:number)=>SetRatingType
}

const RatingStar: React.FC<PropsType> = ({id, rating, setRating}) => {
    const [, updateState] = useState({})
    const forceUpdate = useCallback(() => updateState({}), [])

    const dispatch = useDispatch()

    let arr = [1, 2, 3, 4, 5]

    let onChangeRating = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setRating(id, parseInt(e.target.value)))
        forceUpdate()
    }

    let ratingArr = arr.map((el, index) => {
        return <React.Fragment key={index}>
            <input className={styles.ratingInput} type="radio" name={id.toString()} id={`rating-${id}-${el}`}
                   value={el} aria-label={el.toString()}
                   onBlur={(e) => e.preventDefault()}
                   onChange={(e) => {
                       onChangeRating(e)
                   }} checked={el === rating}/>
            <label className={styles.ratingStar} aria-label={el.toString()} htmlFor={`rating-${id}-${el}`}/>
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