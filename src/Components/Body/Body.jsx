import React from 'react';
import styles from './Body.module.scss';
import ContentItem from "./ContentItem/ContentItem";
import FilterPrice from "./FilterElements/FilterPrice";
import FilterSteel from "./FilterElements/FilterSteel";
import {connect} from "react-redux";


const Body = (props) => {

    let catalogItmes = props.catalog.map(el => <ContentItem title={el.title} price={el.price} steel={el.steel}/>)

    return (
        <div className={styles.body}>
            <div className={styles.bodyContainer}>
                <div className={styles.bodyCategory}>
                    <div className={styles.bodyNavigate}>
                        <h2 className={styles.bodyNavigateTitle}>Разделочные ножи</h2>
                        <ul className={styles.bodyNavigatePathList}>
                            <li className={styles.bodyNavigatePathItem}>
                                <a className={styles.bodyNavigatePathLink} href="">Главная</a>
                            </li>
                            <li className={styles.bodyNavigatePathItem}>
                                <a className={styles.bodyNavigatePathLink} href="">Разделочные ножи</a>
                            </li>
                        </ul>
                    </div>
                    <form className={styles.bodySort} action="">
                        <input className={styles.bodySortCategory} type="list"/>
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
                            {catalogItmes}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        catalog: state.catalogPage.catalog,
        favorite: state.catalogPage.favorite,
    }
}

const BodyContainer = connect(mapStateToProps, {})(Body)

export default BodyContainer;