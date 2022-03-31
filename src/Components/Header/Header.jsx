import React, {useState} from "react"
import styles from "./Header.module.scss"
import user from './../../img/icons/user.svg'
import logo from './../../img/icons/logo.svg'
import location from './../../img/icons/location.svg'
import arrowBottom from './../../img/icons/arrow-bottom.svg'
import favorite from './../../img/icons/favorite.svg'
import cart from './../../img/icons/cart.svg'
import search from './../../img/icons/search.svg'
import cn from 'classnames'
import HeaderTopMenu from "./HeaderTopMenu";
import HeaderBodyMenu from "./HeaderBodyMenu";

const Header = () => {

    return (
        <header className={styles.Header}>
            <HeaderTopMenu/>
            <HeaderBodyMenu/>
            <div className={styles.bottomHeaderMenu}>
                <nav className={styles.bottomHeaderMenuContainer}>
                    <ul className={styles.navBarBottomList}>
                        <li className={styles.navBarBottomItem}>Каталог ножей</li>
                        <li className={styles.navBarBottomItem}>Клинковое оружие</li>
                        <li className={styles.navBarBottomItem}>Сувенирные изделия</li>
                        <li className={styles.navBarBottomItem}>Фонари ARMYTEK</li>
                        <li className={styles.navBarBottomItem}>Сопуствующие товары</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header