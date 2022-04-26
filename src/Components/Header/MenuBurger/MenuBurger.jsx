import React, {useState} from 'react';
import styles from "./MenuBurger.module.scss"
import NavBarItems from "../NavBarItems/NavBarItems";
import cn from 'classnames'
import arrowBack from '../../../img/icons/arrow-back.svg'


const MenuBurger = () => {

    let [isBurgerActive, setIsBurgerActive] = useState(false)
    let [isCatalogActive, setIsCatalogActive] = useState(false)

    const onBurgerClick = () => {
        setIsBurgerActive(prev => !prev)
        setIsCatalogActive(false)
    }
    const onCatalogClick = () => {
        setIsCatalogActive(true)
    }

    return (
        <>
            <div className={`${styles.burgerMenuButton} ${isBurgerActive ? styles.burgerMenuButtonClose : ''}`}
                 onClick={onBurgerClick}>
                <span className={styles.burgerMenuButtonSpan}/>
            </div>
            {isCatalogActive &&
                <div className={styles.burgerMenuButtonBack} onClick={() => setIsCatalogActive(false)}>
                    <img src={arrowBack} className={styles.burgerMenuButtonSpanBackArrow} width="20"/>
                    <span className={styles.burgerMenuButtonSpanBack}>Назад</span>
                </div>
            }
            <div className={`${styles.burgerMenu} ${isBurgerActive ? styles.burgerMenuActive : ''}`}>
                <div onClick={onBurgerClick} className={styles.burgerMenuBackground}/>
                <div className={`${styles.burgerMenuContainer} ${isBurgerActive ? '' : styles.burgerMenuContainerHidden}`}>
                    <nav className={styles.burgerMenuNavigation}>
                        <ul className={styles.burgerMenuList}>
                            <li className={styles.burgerMenuItem}>
                                <a className={styles.burgerMenuLink} href="#">Личный кабинет</a>
                            </li>
                            <li onClick={onCatalogClick}
                                className={cn(styles.burgerMenuItem, styles.burgerMenuItemStuff)}>
                                <a href="#" className={styles.burgerMenuLink}>Каталог товаров</a>
                                <svg className={styles.burgerMenuItemStuffArrow} width="16" height="10"
                                     viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.11323 9.2309L0.324654 2.00808C-0.107404 1.54862 -0.107404 0.803689 0.324655 0.344454C0.756329 -0.114819 1.45646 -0.114819 1.8881 0.344454L7.89495 6.73553L13.9016 0.34464C14.3334 -0.114632 15.0335 -0.114632 15.4652 0.34464C15.897 0.803913 15.897 1.54881 15.4652 2.00827L8.6765 9.23108C8.46056 9.46072 8.17784 9.57541 7.89498 9.57541C7.61199 9.57541 7.32906 9.4605 7.11323 9.2309Z"
                                        fill="white"/>
                                </svg>
                            </li>
                            <NavBarItems isBurgerActive={isBurgerActive}/>
                        </ul>
                    </nav>
                </div>
                <div
                    className={`${styles.burgerMenuContainer} ${isCatalogActive ? '' : styles.burgerMenuContainerHidden}`}>
                    <nav className={styles.burgerMenuNavigation}>
                        <ul className={styles.burgerMenuList}>
                            <li className={styles.burgerMenuItem}>
                                <a className={styles.burgerMenuLink} href="#">Каталог ножей</a>
                            </li>
                            <li className={styles.burgerMenuItem}>
                                <a className={styles.burgerMenuLink} href="#">Клинковое оружие</a>
                            </li>
                            <li className={styles.burgerMenuItem}>
                                <a className={styles.burgerMenuLink} href="#">Сувенирные изделия</a>
                            </li>
                            <li className={styles.burgerMenuItem}>
                                <a className={styles.burgerMenuLink} href="#">Фонари ARMYTEK</a>
                            </li>
                            <li className={styles.burgerMenuItem}>
                                <a className={styles.burgerMenuLink} href="#">Сопуствующие товары</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
};

export default MenuBurger;