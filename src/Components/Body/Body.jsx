import React from 'react';
import styles from './Body.module.scss';
import ContentItem from "./ContentItem/ContentItem";
import FilterPrice from "./FilterElements/FilterPrice";
import FilterSteel from "./FilterElements/FilterSteel";
import {connect} from "react-redux";
import {addItemToCart, removeItemFromCart} from "../../redux/catalogReducer";


const Body = (props) => {

    let catalogItems = props.catalog.map(el => <ContentItem key={el.id}
                                                            removeItemFromCart = {props.removeItemFromCart}
                                                            el={el}
                                                            addedItemsToCart={props.addedItemsToCart}
                                                            addItemToCart={props.addItemToCart}
                                                            id={el.id}
                                                            title={el.title}
                                                            price={el.price}
                                                            steel={el.steel}/>
                                                            )

    return (
        <main className={styles.body}>
            <div className={styles.bodyContainer}>
                <div className={styles.bodyCategory}>
                    <div className={styles.bodyNavigate}>
                        <h2 className={styles.bodyNavigateTitle}>Каталог ножей</h2>
                        <ul className={styles.bodyNavigatePathList}>
                            <li className={styles.bodyNavigatePathItem}>
                                <a className={styles.bodyNavigatePathLink} href="">Главная</a>
                            </li>
                            <li className={styles.bodyNavigatePathItem}>
                                <a className={styles.bodyNavigatePathLink} href="">Каталог ножей</a>
                            </li>
                        </ul>
                    </div>
                    <form className={styles.bodySort} action="select">
                        <select className={styles.bodySortCategory} type="list">
                            <option value="">По популярности</option>
                            <option value="">По возрастанию цены</option>
                            <option value="">По убыванию цены</option>
                        </select>
                    </form>
                </div>
                <div className={styles.contentContainer}>
                    <aside className={styles.contentFilter}>
                        <h3 className={styles.contentFilterTitle}>Фильтр товаров</h3>
                        <FilterPrice/>
                        <FilterSteel/>
                    </aside>
                    <section className={styles.contentContainerList}>
                        <ul className={styles.contentItemsList}>
                            {catalogItems}
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
};

let mapStateToProps = (state) => {
    return {
        catalog: state.catalogPage.catalog,
        favorite: state.catalogPage.favorite,
        addedItemsToCart: state.catalogPage.addedItemsToCart,
    }
}

const BodyContainer = connect(mapStateToProps, {addItemToCart, removeItemFromCart})(Body)

export default BodyContainer;