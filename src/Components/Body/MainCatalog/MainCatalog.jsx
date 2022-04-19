import React, {useCallback, useEffect, useState} from 'react';
import styles from '../Body.module.scss';
import ContentItem from "../common/ContentItem/ContentItem";
import FilterPrice from "../common/FilterElements/FilterPrice/FilterPrice";
import FilterSteel from "../common/FilterElements/FilterSteel/FilterSteel";
import {useSelector} from "react-redux";
import Paginator from "../common/Paginator/Paginator";
import FilterSort from "../common/FilterElements/FilterSort/FilterSort";


const MainCatalog = () => {

    const catalog = useSelector(state => state.catalogPage.catalog)
    const pageSize = useSelector(state => state.catalogPage.pageSize)
    const minInputValue = useSelector(state => state.catalogPage.minInputValue)
    const maxInputValue = useSelector(state => state.catalogPage.maxInputValue)
    const searchValue = useSelector(state => state.catalogPage.searchValue)
    const selectedCheckboxes = useSelector(state => state.catalogPage.selectedCheckboxes)


    let [currentPage, setCurrentPage] = useState(1)
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])

    const [sortCatalogByOption, setSortCatalogByOption] = useState('popular')

    let catalogMain = [...catalog]

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [currentPage])

    const sortCatalog = (e) => {
        let value = e.target.value
        setSortCatalogByOption(value)
    }

    if (searchValue.length > 0) {
        catalogMain = catalogMain.filter(item => {
            return item.title.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    if (minInputValue || maxInputValue) {
        catalogMain = catalogMain.filter(item => {
            if (item.price >= minInputValue && item.price <= maxInputValue) {
                return item
            }
        })
    }

    if (selectedCheckboxes.length > 0) {
        catalogMain = catalogMain.filter((el) => {
            return (
                selectedCheckboxes.includes(el.steel)
            )
        })
    }
    if (!selectedCheckboxes) {
        return catalogMain
    }

    if (sortCatalogByOption === 'price_up') {
        catalogMain.sort((a, b) => {
            return (a.price - b.price)
        })
    }

    if (sortCatalogByOption === 'price_down') {
        catalogMain.sort((a, b) => {
            return (a.price - b.price)
        }).reverse()
    }

    let startPageItem = (currentPage - 1) * pageSize
    let endPageItem = (currentPage * pageSize) - 1

    let totalItemsCount = catalogMain.length
    let catalogItems = catalogMain
        .slice(startPageItem, endPageItem + 1)
        .map(el => <ContentItem key={el.id} el={el} id={el.id}
                                title={el.title} price={el.price} steel={el.steel}/>
        )

    return (
        <main className={styles.body}>
            <div className={styles.bodyContainer}>
                <div className={styles.bodyCategory}>
                    <h2 className={styles.bodyNavigateTitle}>Каталог ножей</h2>
                    <div className={styles.secondRowMenu}>
                        <div className={styles.bodyNavigate}>
                            <ul className={styles.bodyNavigatePathList}>
                                <li className={styles.bodyNavigatePathItem}>
                                    <a className={styles.bodyNavigatePathLink} href="">Главная</a>
                                </li>
                                <li className={styles.bodyNavigatePathItem}>
                                    <a className={styles.bodyNavigatePathLink} href="">Каталог ножей</a>
                                </li>
                            </ul>
                        </div>
                        <FilterSort sortCatalogByOption={sortCatalogByOption}
                                    setSortCatalogByOption={setSortCatalogByOption}/>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <aside className={styles.contentFilter}>
                        <h3 className={styles.contentFilterTitle}>Фильтр товаров</h3>
                        <FilterPrice catalog={catalog}/>
                        <FilterSteel forceUpdate={forceUpdate} setCurrentPage={setCurrentPage}/>
                    </aside>
                    <section className={styles.contentContainerList}>
                        <ul className={styles.contentItemsList}>
                            {catalogItems.length ? catalogItems :
                                <li className={styles.lostSearching}>Ничего не найдено</li>}
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