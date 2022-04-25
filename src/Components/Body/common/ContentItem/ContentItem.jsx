import React from 'react';
import styles from "./ContentItem.module.scss";
import contentKnifePreview from "../../../../img/content/content-knife-preview.jpg";
import compare from "../../../../img/icons/compare.svg";
import {NavLink} from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import RatingStar from "../RatingStar/RatingStar";
import CompareFavoriteButton from "../CompareFavoriteButton/CompareFavoriteButton";

const ContentItem = ({id, el, title, price, steel, link, rating, setRating, forceUpdate}) => {

    return (
        <li className={styles.contentItem}>
            <div className={styles.contentItemPreview} href="">
                <NavLink to={link} className={styles.contentItemPreviewLink} href="">
                    <img className={styles.contentItemPreviewImage} src={contentKnifePreview} alt="" width='374'
                         height='295'/>
                </NavLink>
                <p className={styles.contentItemTitle}>{title}</p>
                <div className={styles.contentItemProperty}>
                    <span className={styles.contentItemPropertySteal}>{steel}</span>
                    <span className={styles.contentItemPropertyMaterial}>Орех, Алюминий</span>
                </div>
                <div className={styles.contentItemRating}>
                    <RatingStar id={id} rating={rating} setRating={setRating} forceUpdate={forceUpdate}/>
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