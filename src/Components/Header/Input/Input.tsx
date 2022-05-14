import React from 'react';
import styles from "./Input.module.scss";
import search from "../../../img/icons/search.svg";
import {catalogSlice} from "../../../redux/catalogSlice";
import {useAppDispatch} from "../../../hook/hook";

type PropsType ={
    searchValue: string
}

const Input: React.FC<PropsType> = ({searchValue}) => {

    const dispatch = useAppDispatch()
    const {setSearchValue} = catalogSlice.actions

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(setSearchValue(e.target.value))
    }

    return (
        <form className={styles.searchBar} action="">
            <input className={styles.searchBarInput} value={searchValue}
                   onChange={(e)=>{onInputChange(e)}} placeholder={'Поиск'} type="text"/>
            <button className={styles.searchBarButton} onClick={(e)=>e.preventDefault()} type={'submit'}>
                <img className={styles.searchBarImage} src={search} alt={'search'}/>
            </button>
        </form>
    );
};

export default Input;