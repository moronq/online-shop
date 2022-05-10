import React from 'react';
import styles from "./ContentItem.module.scss";
import contentKnifePreview from "../../../../img/content/content-knife-preview.jpg";
import {NavLink} from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import RatingStar from "../RatingStar/RatingStar";
import CompareFavoriteButton from "../CompareFavoriteButton/CompareFavoriteButton";
import {SetRatingType} from "../../../../redux/catalogReducer";
import {CatalogItemType} from "../../../../types/types";

type PropsType = {
    id: number
    el: CatalogItemType
    title: string
    price: number
    steel: string
    link: string
    rating: number
    setRating: (id:number, rating:number)=>SetRatingType
    forceUpdate: ()=>void
}

const ContentItem: React.FC<PropsType>= ({id, el, title,
                                             price, steel, link,
                                             rating, setRating, forceUpdate}) => {

    return (
        <li className={styles.contentItem}>
            <div className={styles.contentItemPreview}>
                <NavLink to={link} className={styles.contentItemPreviewLink}>
                    <img className={styles.contentItemPreviewImage} src={contentKnifePreview}
                         alt="content-item=preview" width='374' height='295'/>
                </NavLink>
                <p className={styles.contentItemTitle}>{title}</p>
                <div className={styles.contentItemProperty}>
                    <span className={styles.contentItemPropertySteal}>{steel}</span>
                    <span className={styles.contentItemPropertyMaterial}>Орех, Алюминий</span>
                </div>
                <div className={styles.contentItemRating}>
                    <RatingStar id={id} rating={rating} setRating={setRating}/>
                    <span className={styles.contentItemReviews}>12 отзывов</span>
                </div>
                <div className={styles.contentItemUserOptions}>
                    <p className={styles.contentItemPrice}>{price} p.</p>
                    <CompareFavoriteButton/>
                </div>
                <AddToCartButton el={el}/>
            </div>
        </li>
    );
};

export default ContentItem;