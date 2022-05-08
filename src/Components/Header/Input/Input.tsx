import React from 'react';
import styles from "./Input.module.scss";
import search from "../../../img/icons/search.svg";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../../redux/catalogReducer";

type PropsType ={
    searchValue: string
}

const Input: React.FC<PropsType> = ({searchValue}) => {

    const dispatch = useDispatch()

    const onInputChange = (e:any) =>{
        dispatch(setSearchValue(e.target.value))
    }

    return (
        <form className={styles.searchBar} action="">
            <input className={styles.searchBarInput} value={searchValue}
                   onChange={(e)=>{onInputChange(e)}} placeholder={'Поиск'} type="text"/>
            <button className={styles.searchBarButton} onClick={(e)=>e.preventDefault()} type={'submit'}><img
                className={styles.searchBarImage} src={search}/></button>
        </form>
    );
};

export default Input;