import React, {useState} from 'react';
import styles from "./Header.module.scss";
import search from "../../img/icons/search.svg";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/catalogReducer";

const Input = ({searchValue}) => {

    const dispatch = useDispatch()

    return (
        <form className={styles.searchBar} action="">
            <input className={styles.searchBarInput} value={searchValue} onChange={(e)=>{dispatch(setSearchValue(e.target.value))}} placeholder={'Поиск'} type="text"/>
            <button className={styles.searchBarButton} onClick={(e)=>e.preventDefault()} type={'submit'}><img
                className={styles.searchBarImage} src={search}/></button>
        </form>
    );
};

export default Input;