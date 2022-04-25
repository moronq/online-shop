import React from 'react';
import styles from "./NavBarItems.module.scss";

const NavBarItems = ({isBurgerActive}) => {

    let style = `${isBurgerActive ? styles.burgerMenuItem : styles.navBarItem}`
    let styleLink = `${isBurgerActive ? styles.burgerMenuLink : styles.navBarItemLink}`

    return (
        <>
            <li className={style}><a className={styleLink} href="">О нас</a>
            </li>
            <li className={style}><a className={styleLink} href="">Оплата и
                доставка</a></li>
            <li className={style}><a className={styleLink} href="">Новости</a>
            </li>
            <li className={style}><a className={styleLink} href="">Контакты</a>
            </li>
        </>
    );
};

export default NavBarItems;