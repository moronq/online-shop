import React, {useEffect, useState} from 'react';
import styles from "../../Body.module.scss";
import contentKnifePreview from "../../../../img/content/content-knife-preview.jpg";
import star from "../../../../img/icons/star.svg";
import cartWhite from "../../../../img/icons/cart-white.svg";
import compare from "../../../../img/icons/compare.svg";

const ContentItem = ({id, el, title, price, steel, addItemToCart, addedItemsToCart, removeItemFromCart}) => {

    let addToCart = () => {
        addItemToCart(el)
    }
    let removeFromCart = () => {
        removeItemFromCart(el)
    }

    return (
        <li className={styles.contentItem}>
            <div className={styles.contentItemPreview} href="">
                <a className={styles.contentItemPreviewLink} href="">
                    <img className={styles.contentItemPreviewImage} src={contentKnifePreview} alt="" width='374'
                         height='295'/>
                </a>
                <p className={styles.contentItemTitle}>{title}</p>
                <div className={styles.contentItemProperty}>
                    <span className={styles.contentItemPropertySteal}>{steel}</span>
                    <span className={styles.contentItemPropertyMaterial}>Орех, Алюминий</span>
                </div>
                <div className={styles.contentItemRating}>
                    <ul className={styles.contentItemRatingStarList}>
                        <li className={styles.contentItemRatingStarItem}>
                            <img className={styles.contentItemRatingStarImage} src={star} width='21' alt=""/>
                        </li>
                        <li className={styles.contentItemRatingStarItem}>
                            <img className={styles.contentItemRatingStarImage} src={star} width='21' alt=""/>
                        </li>
                        <li className={styles.contentItemRatingStarItem}>
                            <img className={styles.contentItemRatingStarImage} src={star} width='21' alt=""/>
                        </li>
                        <li className={styles.contentItemRatingStarItem}>
                            <img className={styles.contentItemRatingStarImage} src={star} width='21' alt=""/>
                        </li>
                        <li className={styles.contentItemRatingStarItem}>
                            <img className={styles.contentItemRatingStarImage} src={star} width='21' alt=""/>
                        </li>
                    </ul>
                    <span className={styles.contentItemReviews}>12 отзывов</span>
                </div>
                <div className={styles.contentItemUserOptions}>
                    <p className={styles.contentItemPrice}>{price} p.</p>
                    <div className={styles.contentItemUserOptionsContainer}>
                        <button className={styles.contentItemCompare}>
                            <img className={styles.contentItemCompareImage} width='26' src={compare} alt="cart"/>
                        </button>
                        <button className={styles.contentItemFavorite}>
                            <svg className={styles.contenrItemFavoriteImage} width="28" height="27" viewBox="0 0 28 27"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.1004 0C17.7169 0 15.4856 1.07339 14 2.87184C12.5144 1.07333 10.2832 0 7.89957 0C3.54375 0 0 3.52462 0 7.85705C0 11.2495 2.03385 15.1734 6.04492 19.5198C9.13175 22.8646 12.4897 25.4544 13.4454 26.1685L13.9998 26.5828L14.5543 26.1686C15.5099 25.4545 18.868 22.8647 21.9549 19.52C25.9661 15.1736 28 11.2496 28 7.85705C28 3.52462 24.4562 0 20.1004 0ZM20.5948 18.2782C18.0558 21.0293 15.3242 23.2533 13.9998 24.2783C12.6755 23.2533 9.944 21.0293 7.40498 18.2781C3.76837 14.3375 1.84615 10.734 1.84615 7.85705C1.84615 4.53717 4.56172 1.83622 7.89957 1.83622C10.0961 1.83622 12.1243 3.02694 13.1927 4.94377L14 6.3923L14.8073 4.94377C15.8756 3.027 17.9038 1.83622 20.1004 1.83622C23.4383 1.83622 26.1538 4.53711 26.1538 7.85705C26.1538 10.7341 24.2316 14.3377 20.5948 18.2782Z"
                                    fill="#E8AA31"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <button onClick={addedItemsToCart.includes(el) ? removeFromCart : addToCart}
                        className={`${styles.contentItemButtonCart} ${addedItemsToCart.includes(el)
                            ? styles.contentItemButtonCartRemove : ''}`}>
                    <span
                        className={styles.contentItemButtonCartText}>{addedItemsToCart.includes(el)
                        ? 'Убрать из корзины' : 'В корзину'}
                    </span>
                    <img className={styles.contentItemButtonCartImage} width={'19'} src={cartWhite} alt={'cart'}/>
                </button>
            </div>
        </li>
    );
};

export default ContentItem;