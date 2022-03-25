import React from "react";
import styles from './HeaderBody.module.scss'
import logo from '../../../img/iconsfont/logo.svg'
import location from "../../../img/iconsfont/location.svg";
import arrowBottom from "../../../img/iconsfont/arrow-bottom.svg";
import favorite from "../../../img/iconsfont/favorite.svg";
import cart from "../../../img/iconsfont/cart.svg";
import search from "../../../img/iconsfont/search.svg";

const HeaderBody = () => {
    return (
        <div className={styles.headerBody}>
            <div className={styles.headerBodyContainer}>
                <a href="#"> <img src={logo} width={'190px'} alt=""/></a>
                <div className={styles.headerBodySearch}>
                    <form action="" className={styles.headerBodySearchForm}>
                        <button className={styles.headerBodySearchButton}>
                            <img src={search} width={'14px'}/>
                        </button>
                        <input type="text" className={styles.headerBodySearchInput} placeholder={'Поиск'}/>
                    </form>
                </div>
                <div className={styles.headerBodyLocation}>
                    <a href="#"><img src={location} alt=""/>Москва</a>
                    <div>
                        <p>8-800-777-49-67</p>
                        <button>Заказать звонок</button>
                        <img src={arrowBottom} alt=""/>
                    </div>
                </div>
                <div className={styles.headerBodyCart}>
                    <img src={favorite} width={'28px'} alt=""/>
                    <img src={cart} width={'31px'} alt=""/>
                    <div>
                        <span>0 p.</span>
                        <span>Оформить заказ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBody