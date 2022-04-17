import React, {useEffect, useState} from 'react';
import styles from '../Body.module.scss';
import ContentItem from "../common/ContentItem/ContentItem";
import FilterPrice from "../common/FilterElements/FilterPrice/FilterPrice";
import FilterSteel from "../common/FilterElements/FilterSteel";
import {useDispatch, useSelector} from "react-redux";
import Paginator from "../common/Paginator/Paginator";
import {setFilterPriceCatalog} from "../../../redux/catalogReducer";


const MainCatalog = () => {

    const catalog = useSelector(state => state.catalogPage.catalog)
    const pageSize = useSelector(state => state.catalogPage.pageSize)
    const filterPriceCatalog = useSelector(state => state.catalogPage.filterPriceCatalog)
    const searchCatalog = useSelector(state => state.catalogPage.searchCatalog)
    const MIN_PRICE = useSelector(state=>state.catalogPage.MIN_PRICE)
    const MAX_PRICE = useSelector(state=>state.catalogPage.MAX_PRICE)
    const dispatch = useDispatch()

    let [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        dispatch(setFilterPriceCatalog())
    },[searchCatalog])

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        })
    }, [currentPage])

    let startPageItem = (currentPage - 1) * pageSize
    let endPageItem = (currentPage * pageSize) - 1

    let totalItemsCount = filterPriceCatalog.length
    let catalogItems = filterPriceCatalog
            .slice(startPageItem, endPageItem + 1)
            .map(el => <ContentItem key={el.id} el={el} id={el.id}
                                    title={el.title} price={el.price} steel={el.steel}/>
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
                        <FilterPrice catalog={catalog}
                                     MIN_PRICE={MIN_PRICE}
                                     MAX_PRICE={MAX_PRICE}/>
                        <FilterSteel/>
                    </aside>
                    <section className={styles.contentContainerList}>
                        <ul className={styles.contentItemsList}>
                            {catalogItems.length ? catalogItems : <li className={styles.lostSearching}>Ничего не найдено</li> }
                        </ul>
                    </section>
                </div>
                <Paginator totalItemsCount={totalItemsCount}
                           pageSize={pageSize}
                           setCurrentPage={setCurrentPage}
                           currentPage={currentPage}
                />
            </div>
        </main>
    );
};

export default MainCatalog;