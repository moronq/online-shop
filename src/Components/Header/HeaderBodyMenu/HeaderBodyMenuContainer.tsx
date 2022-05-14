import React, {useState} from "react";
import HeaderBodyMenu from "./HeaderBodyMenu";
import {useAppSelector} from "../../../hook/hook";

const HeaderBodyMenuContainer = () => {

    const {addedItemsToCart,searchValue} = useAppSelector(state=>state.catalogPage)

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