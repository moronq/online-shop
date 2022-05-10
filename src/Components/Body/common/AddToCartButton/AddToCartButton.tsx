import React from 'react';
import styles from "./AddToCartButton.module.scss";
import cartWhite from "../../../../img/icons/cart-white.svg";
import {addItemToCart, removeItemFromCart} from "../../../../redux/catalogReducer";
import {useDispatch, useSelector} from "react-redux";
import { AppStateType } from '../../../../redux/store';
import {CatalogItemType} from "../../../../types/types";

type PropsType = {
    el: CatalogItemType
}

const AddToCartButton: React.FC<PropsType> = ({el}) => {

    const addedItemsToCart = useSelector((state:AppStateType) => state.catalogPage.addedItemsToCart)
    const dispatch = useDispatch()

    let addToCart = () => {
        dispatch(addItemToCart(el))
    }
    let removeFromCart = () => {
        dispatch(removeItemFromCart(el))
    }

    return (
        <button onClick={addedItemsToCart.includes(el) ? removeFromCart : addToCart}
                className={`${styles.contentItemButtonCart} ${addedItemsToCart.includes(el)
                    ? styles.contentItemButtonCartRemove : ''}`}>
                    <span
                        className={styles.contentItemButtonCartText}>{addedItemsToCart.includes(el)
                        ? 'Убрать из корзины' : 'В корзину'}
                    </span>
            <img className={styles.contentItemButtonCartImage} width={'19'} src={cartWhite} alt={'cart'}/>
        </button>
    );
};

export default AddToCartButton;