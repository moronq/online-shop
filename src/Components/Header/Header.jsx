import React from "react";
import NavBar from "./NavBar/NavBar";
import styles from './Header.module.scss'
import HeaderBody from "./HeaderBody/HeaderBody";
import HeaderCatalog from "./HeaderCatalog/HeaderCatalog";

const Header = () => {
    return(
        <div className={styles.header}>
            <NavBar/>
            <HeaderBody/>
            <HeaderCatalog/>
        </div>
    )
}

export default Header