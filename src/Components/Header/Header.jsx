import React from "react"
import styles from "./Header.module.scss"
import HeaderTopMenu from "./HeaderTopMenu/HeaderTopMenu";
import HeaderBodyMenuContainer from "./HeaderBodyMenu/HeaderBodyMenuContainer";
import HeaderBottomMenu from "./HeaderBottomMenu/HeaderBottomMenu";

const Header = () => {

    return (
        <header className={styles.Header}>
            <HeaderTopMenu/>
            <HeaderBodyMenuContainer/>
            <HeaderBottomMenu/>
        </header>
    )
}

export default Header