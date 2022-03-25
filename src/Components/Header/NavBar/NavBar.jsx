import React from "react";
import user from './../../../img/iconsfont/user.svg'
import styles from './NavBar.module.scss'
import cn from 'classnames'


const NavBar = () => {
    return (
        <div className={cn(styles.headerTop, styles.topHeader)}>
            <div className={styles.headerTopContainer}>
                <div className={cn(styles.headerTopMenu, styles.menu)}>
                    <nav className={styles.menuBody}>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}><a className={styles.menuLink} href='#'>О нас</a></li>
                            <li className={styles.menuItem}><a className={styles.menuLink} href='#'>Оплата и доставка</a></li>
                            <li className={styles.menuItem}><a className={styles.menuLink} href='#'>Новости</a></li>
                            <li className={styles.menuItem}><a className={styles.menuLink} href='#'>Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <a className={styles.topHeaderUser} href="#"> <img className={styles.iconUser} width={'21px'} src={user} alt=""/> Личный кабинет</a>
                <button className={styles.iconMenu}><span></span></button>
            </div>
        </div>
    )
}

export default NavBar