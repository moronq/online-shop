import React from 'react';
import styles from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const HeaderBottomMenu = () => {

    const navBarItems = useSelector(state=> state.catalogPage.navBarItems)

    return (
        <div className={styles.bottomHeaderMenu}>
            <nav className={styles.bottomHeaderMenuContainer}>
                <ul className={styles.navBarBottomList}>
                    {navBarItems.map((el,index)=><li key={index} className={styles.navBarBottomItem}>
                        <NavLink to={el.link} className={(navData) =>
                            navData.isActive ? styles.activeLink + ' ' + styles.navBarBottomItemLink
                                : styles.navBarBottomItemLink
                        }>
                            {el.title}
                        </NavLink>
                    </li>)}

                </ul>
            </nav>
        </div>
    );
};

export default HeaderBottomMenu;