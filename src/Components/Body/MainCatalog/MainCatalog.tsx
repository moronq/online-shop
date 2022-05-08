import React from 'react';
import styles from "../Body.module.scss";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";
import FilterSort from "../common/FilterElements/FilterSort/FilterSort";
import FilterPrice from "../common/FilterElements/FilterPrice/FilterPrice";
import FilterSteel from "../common/FilterElements/FilterSteel/FilterSteel";
import Paginator from "../common/Paginator/Paginator";

type PropsType = {
    setCurrentPage: (arg0: number) => void
    forceUpdate: () => void
    setSortCatalogByOption: (arg0: string) => void
    currentPage: number
    totalItemsCount: number
    catalogItems: Array<any>
    pageSize: number
    sortCatalogByOption: string
}

const MainCatalog: React.FC<PropsType> = ({
                         setCurrentPage, forceUpdate, setSortCatalogByOption, currentPage,
                                              totalItemsCount, catalogItems, pageSize,
                                              sortCatalogByOption
                     }) => {
    return (
        <main className={styles.body}>
            <div className={styles.bodyContainer}>
                <div className={styles.bodyCategory}>
                    <h2 className={styles.bodyNavigateTitle}>Каталог ножей</h2>
                    <div className={styles.secondRowMenu}>
                        <BreadCrumbs/>
                        <FilterSort sortCatalogByOption={sortCatalogByOption}
                                    setSortCatalogByOption={setSortCatalogByOption}/>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <aside className={styles.contentFilter}>
                        <h3 className={styles.contentFilterTitle}>Фильтр товаров</h3>
                        <FilterPrice setCurrentPage={setCurrentPage}/>
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