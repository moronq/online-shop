import styles from "./Header.module.scss";
import user from "../../img/icons/user.svg";
import React, {useState} from "react";
import MenuBurger from "./MenuBurger";
import NavBarItems from "./NavBarItems";

const HeaderTopMenu = () => {

    let [isBurgerActive, setIsBurgerActive] = useState(false)

    const onBurgerClick = () => {
        setIsBurgerActive(prev => !prev)
    }

    return (
        <div className={styles.topHeaderMenu}>
            <div className={styles.topHeaderMenuContainer}>
                <nav className={styles.navBar}>
                    <ul className={styles.navBarList}>
                        <NavBarItems isBurgerActive={isBurgerActive}/>
                    </ul>
                </nav>
                <a className={styles.userLinkBlock}>
                    <img className={styles.userImage} width={'22px'} src={user}/>
                    <span className={styles.userLink}>Личный кабинет</span>
                </a>
                <MenuBurger isBurgerActive={isBurgerActive} onBurgerClick={onBurgerClick}/>
            </div>
        </div>
    )
}

export default HeaderTopMenu