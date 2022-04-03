import React from "react"
import styles from "./Header.module.scss"
import HeaderTopMenu from "./HeaderTopMenu";
import HeaderBodyMenu from "./HeaderBodyMenu";
import HeaderBottomMenu from "./HeaderBottomMenu";
import {connect} from "react-redux";

const Header = ({addedItemsToCart}) => {
    return (
        <header className={styles.Header}>
            <HeaderTopMenu addedItemsToCart={addedItemsToCart}/>
            <HeaderBodyMenu addedItemsToCart={addedItemsToCart}/>
            <HeaderBottomMenu/>
        </header>
    )
}

let mapStateToProps =(state)=>{
    return {
        addedItemsToCart: state.catalogPage.addedItemsToCart,
    }
}

const HeaderContainer = connect(mapStateToProps,{})(Header)

export default HeaderContainer