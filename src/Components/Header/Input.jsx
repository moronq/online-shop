import React, {useState} from 'react';
import styles from "./Header.module.scss";
import search from "../../img/icons/search.svg";

const Input = ({searchValue, setSearchValue}) => {

    return (
        <form className={styles.searchBar} action="">
            <input className={styles.searchBarInput} value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} placeholder={'Поиск'} type="text"/>
            <button className={styles.searchBarButton} type={'submit'}><img
                className={styles.searchBarImage} src={search}/></button>
        </form>
    );
};

export default Input;