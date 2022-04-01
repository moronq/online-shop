import React from 'react';
import styles from "./Header.module.scss";
import phone from "../../img/icons/phone.svg";
import favorite from "../../img/icons/favorite.svg";
import cart from "../../img/icons/cart.svg";

const UserMenuOption = () => {
    return (
        <>
            <a className={styles.userMenuPhone} href="">
                <img className={styles.userMenuPhoneImage} width={'23px'} src={phone} alt=""/>
            </a>
            <a className={styles.userMenuFavorite} href="">
                <img className={styles.userMenuFavoriteImage} width={'28px'} src={favorite} alt=""/>
            </a>
            <a href='#' className={styles.userMenuCart}>
                <img className={styles.cartImage} width={'31.5px'} src={cart} alt=""/>
                <span className={styles.cartCount}>0</span>
            </a>
        </>
    );
};

export default UserMenuOption;