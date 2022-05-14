import React from 'react';
import styles from "./HeaderBottomMenu.module.scss";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hook/hook";

const HeaderBottomMenu = () => {

    const {navBarItems} = useAppSelector(state=>state.catalogPage)

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