import React, {useState} from 'react';
import styles from "./Input.module.scss";
import search from "../../../img/icons/search.svg";
import {UseSearch} from "../../../hook/UseSearch";

type PropsType = {}

const Input: React.FC<PropsType> = () => {

    const {setSearchParams, searchQuery} = UseSearch()

    const [value, setValue] = useState(searchQuery as string || '')

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // @ts-ignore
        const query = e.target.search.value
        const params: { search?: string } = {}
        if (query.length) params.search = query
        setSearchParams(params)
    }

    return (
        <form className={styles.searchBar} onSubmit={onSubmit}>
            <input className={styles.searchBarInput} value={value}
                   onChange={onChange} placeholder={'Поиск'} type="search" name='search'/>
            <button className={styles.searchBarButton} type={'submit'}>
                <img className={styles.searchBarImage} src={search} alt={'search'}/>
            </button>
        </form>
    );
};

export default Input;