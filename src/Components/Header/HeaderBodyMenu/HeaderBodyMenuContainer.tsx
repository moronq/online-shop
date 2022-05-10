import React, {useState} from "react";
import {useSelector} from "react-redux";
import HeaderBodyMenu from "./HeaderBodyMenu";
import {AppStateType} from '../../../redux/store'

const HeaderBodyMenuContainer = () => {

    const addedItemsToCart = useSelector((state: AppStateType) => state.catalogPage.addedItemsToCart)
    const searchValue = useSelector((state:AppStateType) => state.catalogPage.searchValue)

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