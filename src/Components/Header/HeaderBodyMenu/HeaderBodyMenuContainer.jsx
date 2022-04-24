import React, {useState} from "react";
import {useSelector} from "react-redux";
import HeaderBodyMenu from "./HeaderBodyMenu";

const HeaderBodyMenuContainer = () => {

    const addedItemsToCart = useSelector(state => state.catalogPage.addedItemsToCart)
    const searchValue = useSelector(state => state.catalogPage.searchValue)

    let [isSpoilerActive, setIsSpoilerActive] = useState(false)

    let price = 0

    for (let i = 0; i < addedItemsToCart.length; i++) {
        price = price + addedItemsToCart[i].price
    }

    const toggleSpoilerActive = () => {
        setIsSpoilerActive(prev => !prev)
    }

    return <HeaderBodyMenu toggleSpoilerActive={toggleSpoilerActive}
                        searchValue={searchValue}
                        isSpoilerActive={isSpoilerActive}
                        addedItemsToCart={addedItemsToCart}
                        price={price}/>
}

export default HeaderBodyMenuContainer