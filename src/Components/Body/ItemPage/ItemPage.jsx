import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import AddToCartButton from "../common/AddToCartButton/AddToCartButton";
import styles from './ItemPage.module.scss';
import cartWhite from "../../../img/icons/cart-white.svg";

const ItemPage = () => {

    const itemId = useParams()
    const catalog = useSelector(state => state.catalogPage.catalog)
    const itemInfo = catalog.filter(item => item.id === parseInt(itemId.id))
    const item = itemInfo[0]

    return (
        <div className={styles.itemPageContainer}>
            <div className={styles.itemInfoWrapper}>
                <section className={styles.itemPreview}>
                    <img src="" alt=""/>
                    <div>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </section>
                <section className={styles.itemInfo}>
                    <div>
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        список с характеристиками
                    </div>
                    <div>
                        <div>
                            <h3></h3>
                            <span>
                                + 449 баллов за покупку
                            </span>
                        </div>
                    </div>
                    <div>
                        <AddToCartButton el={item}/>
                        <button className={styles.buyOneClickButton}>
                            <span className={styles.buyOneClickButtonText}>
                                Купить в 1 клик
                            </span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ItemPage;