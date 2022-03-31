import styles from "./Header.module.scss";
import user from "../../img/icons/user.svg";
import React from "react";

const HeaderTopMenu = () => {
    return (
        <div className={styles.topHeaderMenu}>
            <div className={styles.topHeaderMenuContainer}>
                <nav className={styles.navBar}>
                    <ul className={styles.navBarList}>
                        <li className={styles.navBarItem}><a className={styles.navBarItemLink} href="">О нас</a>
                        </li>
                        <li className={styles.navBarItem}><a className={styles.navBarItemLink} href="">Оплата и
                            доставка</a></li>
                        <li className={styles.navBarItem}><a className={styles.navBarItemLink} href="">Новости</a>
                        </li>
                        <li className={styles.navBarItem}><a className={styles.navBarItemLink} href="">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <a className={styles.userLinkBlock}>
                    <img className={styles.userImage} width={'22px'} src={user}/>
                    <span className={styles.userLink}>Личный кабинет</span>
                </a>
            </div>
        </div>
    )
}

export default HeaderTopMenu