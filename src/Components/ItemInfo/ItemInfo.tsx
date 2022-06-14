import React, {FC} from 'react';
import styles from "./ItemInfo.module.scss";
import RatingStar from "../../common/RatingStar/RatingStar";
import CompareFavoriteButton from "../../common/CompareFavoriteButton/CompareFavoriteButton";
import AddToCartButton from "../../common/AddToCartButton/AddToCartButton";
import CommonButton from "../../common/CommonButton/CommonButton";
import {useAppSelector} from "../../hook/hook";

type ItemInfoType = {
    itemId: any
}

const ItemInfo: FC<ItemInfoType> = ({itemId}) => {

    const {catalog} = useAppSelector(state=>state.catalogPage)
    const itemInfo = itemId ? catalog.filter(item => item.id.toString() === itemId) : []
    const item = itemInfo[0]

    const arrList = (arr:Array<string>):React.ReactNode => {
        return arr.map((el, index)=>{
            return <li key={index}>{el}</li>
        })
    }

    const characteristics = ['Артикул:', 'Торговая марка:', 'Серия:', 'Бонусные баллы:']
    const characteristicsValue = ['AF0000001952:', 'WUESTHOF (Германия)', 'Ножи серии Classic Ikon', '38']

    return (
        <section className={styles.itemInfo}>
            <div className={styles.title}>
                <div className={styles.titleWrapper}>
                    <div className={styles.titleRating}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <RatingStar id={itemId ? parseInt(itemId) : 0} rating={item.rating}/>
                    </div>
                    <CompareFavoriteButton/>
                </div>
                <p className={styles.inStock}>В наличии</p>
                <span className={styles.underline}/>
            </div>
            <div className={styles.characteristics}>
                <ul className={styles.characteristicsTitle}>
                    {arrList(characteristics)}
                </ul>
                <ul className={styles.characteristicsValue}>
                    {arrList(characteristicsValue)}
                </ul>
                <span className={styles.underline}/>
            </div>
            <div className={styles.priceWrapper}>
                <h3 className={styles.price}>{item.price}₽</h3>
                <span className={styles.bonus}>+ 449 баллов за покупку</span>
            </div>
            <div className={styles.buyButtonWrapper}>
                <AddToCartButton el={item}/>
                <CommonButton>Купить в 1 клик</CommonButton>
            </div>
        </section>
    );
};

export default ItemInfo;