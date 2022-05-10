import React from 'react';
import styles from "./HeaderBodyMenu.module.scss";
import {NavLink} from "react-router-dom";
import logo from "../../../img/icons/logo.svg";
import Input from "../Input/Input";
import location from "../../../img/icons/location.svg";
import arrowBottom from "../../../img/icons/arrow-bottom.svg";
import phone from "../../../img/icons/phone.svg";
import favorite from "../../../img/icons/favorite.svg";
import cart from "../../../img/icons/cart.svg";
import {CatalogItemType} from "../../../redux/catalogReducer";

type PropsType ={
    toggleSpoilerActive: ()=>void
    searchValue: string
    isSpoilerActive: boolean
    addedItemsToCart: Array<CatalogItemType>
    price: number
}

const HeaderBodyMenu: React.FC<PropsType> = ({toggleSpoilerActive, searchValue,
                                                 isSpoilerActive, addedItemsToCart,
                                                 price}) => {
    return (
        <div className={styles.midHeaderMenu}>
            <div className={styles.midHeaderMenuContainer}>
                <NavLink to={'/'} className={styles.imageLogo}><img src={logo} alt=""/></NavLink>
                <Input searchValue={searchValue}/>
                <div className={styles.userMenu}>
                    <a className={styles.userMenuLocation} href="#">
                        <img src={location} width={'17px'} alt="your city"/>
                        <span className={styles.userMenuLocationCity}>Санкт-Петербург</span>
                    </a>
                    <div className={styles.userMenuFlexContainer}>
                        <div className={styles.userMenuNumber}>
                            <div className={styles.userMenuCallOption}>
                                <a className={styles.userMenuMainNumber} href="tel:88007774967">8-800-777-49-67</a>
                                <button className={styles.userMenuCallback}>Заказать звонок</button>
                            </div>
                            <button className={`${styles.userMenuNumberChooseButton} 
                                ${isSpoilerActive ? styles.userMenuNumberChooseButtonRotated : ''}`}
                                    onClick={toggleSpoilerActive}>
                                <img className={styles.userMenuNumberChooseButtonImage} src={arrowBottom} alt=""/>
                            </button>
                            <div className={`${styles.spoilerNumberContainer} 
                                ${isSpoilerActive ? ' ' : styles.spoilerNumberContainerHidden}`}>
                                <ul className={`${styles.spoilerNumberList} 
                                    ${isSpoilerActive ? '' : styles.spoilerNumberListHidden}`}>
                                    <li className={styles.spoilerNumberItem}>
                                        <a className={styles.userMenuMainNumber}
                                           href="tel:88007774968">8-800-777-49-68</a>
                                    </li>
                                    <li className={styles.spoilerNumberItem}>
                                        <a className={styles.userMenuMainNumber}
                                           href="tel:88007774969">8-800-777-49-69</a>
                                    </li>
                                    <li className={styles.spoilerNumberItem}>
                                        <a className={styles.userMenuMainNumber}
                                           href="tel:88007774970">8-800-777-49-70</a>
                                    </li>
                                    <li className={styles.spoilerNumberItem}>
                                        <a className={styles.userMenuMainNumber}
                                           href="tel:89283349890">8-928-334-98-90</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a className={styles.userMenuPhone} href="#">
                            <img className={styles.userMenuPhoneImage} width={'23px'} src={phone} alt=""/>
                        </a>
                        <a className={styles.userMenuFavorite} href="">
                            <img className={styles.userMenuFavoriteImage} width={'28px'} src={favorite} alt=""/>
                        </a>
                        <a href='#' className={styles.userMenuCart}>
                            <img className={styles.cartImage} width={'31.5px'} src={cart} alt=""/>
                            <span className={styles.cartCount}>{addedItemsToCart.length}</span>
                        </a>
                    </div>
                    <div className={styles.userMenuOrder}>
                        <span className={styles.price}>{price}р.</span>
                        <span className={styles.userMenuOrderText}>Оформить заказ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBodyMenu;