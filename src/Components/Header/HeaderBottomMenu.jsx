import React from 'react';
import styles from "./Header.module.scss";

const HeaderBottomMenu = () => {
    return (
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
    );
};

export default HeaderBottomMenu;