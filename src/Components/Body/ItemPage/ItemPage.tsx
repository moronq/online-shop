import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import AddToCartButton from "../common/AddToCartButton/AddToCartButton"
import styles from './ItemPage.module.scss'
import preview_1 from './../../../img/preview/preview_1.jpg'
import preview_2 from './../../../img/preview/preview_2.jpg'
import preview_3 from './../../../img/preview/preview_3.jpg'
import preview_4 from './../../../img/preview/preview_4.jpg'
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs"
import RatingStar from "../common/RatingStar/RatingStar"
import CompareFavoriteButton from "../common/CompareFavoriteButton/CompareFavoriteButton"
import {ParamsType} from "../../../types/types";
import {useAppSelector} from "../../../hook/hook";

const ItemPage = () => {

    const itemId = useParams<ParamsType>()
    const {catalog} = useAppSelector(state=>state.catalogPage)
    const itemInfo = itemId.id ? catalog.filter(item => item.id.toString() === itemId.id) : []
    const item = itemInfo[0]

    const [activePreview, setActivePreview] = useState(0)

    const previewArray = [preview_1, preview_2, preview_3, preview_4,]

    return (
        <div className={styles.itemPageContainer}>
            <div className={styles.breadCrumbsContainer}>
                <BreadCrumbs/>
            </div>
            <div className={styles.itemInfoWrapper}>
                <section className={styles.itemPreview}>
                    <img className={styles.previewMain} src={previewArray[activePreview]} alt=""/>
                    <ul className={styles.previewList}>
                        {previewArray.map((el, index) => <li key={index}
                                                             onClick={() => {
                                                                 setActivePreview(index)
                                                             }}>
                            <img className={styles.previewListItem} src={el} alt=""/>
                        </li>)}
                    </ul>
                </section>
                <section className={styles.itemInfo}>
                    <div className={styles.title}>
                        <div className={styles.titleWrapper}>
                            <div className={styles.titleRating}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <RatingStar id={itemId.id ? parseInt(itemId.id) : 0} rating={item.rating}/>
                            </div>
                            <div className={styles.itemPageCompareFavorite}>
                                <CompareFavoriteButton/>
                            </div>
                        </div>
                        <p className={styles.inStock}>В наличии</p>
                        <span className={styles.underline}/>
                    </div>
                    <div className={styles.characteristics}>
                        <ul className={styles.characteristicsTitle}>
                            <li className={styles.characteristicsTitleItem}>Артикул:</li>
                            <li>Торговая марка:</li>
                            <li>Серия:</li>
                            <li>Бонусные баллы:</li>
                        </ul>
                        <ul className={styles.characteristicsValue}>
                            <li className={styles.characteristicsValueItem}>AF0000001952</li>
                            <li className={styles.characteristicsValueItem}>WUESTHOF (Германия)</li>
                            <li className={styles.characteristicsValueItem}>Ножи серии Classic Ikon</li>
                            <li className={styles.characteristicsValueItem}>38</li>
                        </ul>
                        <span className={styles.underline}/>
                    </div>
                    <div className={styles.priceWrapper}>
                        <h3 className={styles.price}>{item.price}₽</h3>
                        <span className={styles.bonus}>+ 449 баллов за покупку</span>
                    </div>
                    <div className={styles.buyButtonWrapper}>
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