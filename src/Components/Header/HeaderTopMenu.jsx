import styles from "./Header.module.scss";
import user from "../../img/icons/user.svg";
import React, {useRef, useState} from "react";
import MenuBurger from "./MenuBurger";
import NavBarItems from "./NavBarItems";
import UserMenuOption from "./UserMenuOption";
import cn from 'classnames'

const HeaderTopMenu = () => {

    return (
        <div className={styles.topHeaderMenu}>
            <div className={styles.topHeaderMenuContainer}>
                <nav className={styles.navBar}>
                    <ul className={styles.navBarList}>
                        <NavBarItems/>
                    </ul>
                </nav>
                <UserMenuOption/>
                <a className={styles.userLinkBlock}>
                    <img className={styles.userImage} width={'22px'} src={user}/>
                    <span className={styles.userLink}>Личный кабинет</span>
                </a>
                <MenuBurger/>
            </div>
        </div>
    )
}

export default HeaderTopMenu