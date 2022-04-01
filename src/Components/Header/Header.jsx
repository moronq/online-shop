import React, {useState} from "react"
import styles from "./Header.module.scss"
import cn from 'classnames'
import HeaderTopMenu from "./HeaderTopMenu";
import HeaderBodyMenu from "./HeaderBodyMenu";
import HeaderBottomMenu from "./HeaderBottomMenu";

const Header = () => {

    return (
        <header className={styles.Header}>
            <HeaderTopMenu/>
            <HeaderBodyMenu/>
            <HeaderBottomMenu/>
        </header>
    )
}

export default Header