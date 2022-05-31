import React from 'react';
import styles from "./AddToCartButton.module.scss";
import cartWhite from "../../img/icons/cart-white.svg";
import {catalogSlice} from "../../store/catalogSlice";
import {CatalogItemType} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../hook/hook";

type PropsType = {
    el: CatalogItemType
}

const AddToCartButton: React.FC<PropsType> = ({el}) => {

    const {addedItemsToCart} = useAppSelector(state => state.catalogPage)
    const dispatch = useAppDispatch()
    const {addToCart, removeFromCart} = catalogSlice.actions


    let addItemToCart = () => {
        dispatch(addToCart(el))
    }
    let removeItemFromCart = () => {
        dispatch(removeFromCart(el))
    }

    return (
        <button onClick={addedItemsToCart.includes(el) ? removeItemFromCart : addItemToCart}
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