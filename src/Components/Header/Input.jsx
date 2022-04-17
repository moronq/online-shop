import React from 'react';
import styles from "./Header.module.scss";
import search from "../../img/icons/search.svg";
import {useDispatch} from "react-redux";
import {setSearchCatalog, setSearchValue} from "../../redux/catalogReducer";

const Input = ({searchValue}) => {

    const dispatch = useDispatch()

    const onInputChange = (e)=>{
        dispatch(setSearchValue(e.target.value))
        dispatch(setSearchCatalog())
    }

    const onKeyDownInput =(e)=>{
        if (e.key === 'Enter') {
            dispatch(setSearchValue(e.target.value))
            dispatch(setSearchCatalog())
        }
    }

    return (
        <form className={styles.searchBar} action="">
            <input className={styles.searchBarInput} value={searchValue}
                   onKeyDown={onKeyDownInput}
                   onChange={(e)=>{onInputChange(e)}} placeholder={'Поиск'} type="text"/>
            <button className={styles.searchBarButton} onClick={(e)=>e.preventDefault()} type={'submit'}><img
                className={styles.searchBarImage} src={search}/></button>
        </form>
    );
};

export default Input;