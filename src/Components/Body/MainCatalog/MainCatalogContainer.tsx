import React, {useCallback, useEffect, useState} from 'react'
import ContentItem from "../../../common/ContentItem/ContentItem"
import MainCatalog from "./MainCatalog"
import {useAppSelector} from "../../../hook/hook";

const MainCatalogContainer = () => {

    const {catalog, pageSize, minInputValue,
        maxInputValue, searchValue, selectedCheckboxes} = useAppSelector(state=>state.catalogPage)

    const [currentPage, setCurrentPage] = useState(1)

    const [, updateState] = useState({})
    const forceUpdate = useCallback(() => updateState({}), [])

    const [sortCatalogByOption, setSortCatalogByOption] = useState('default')

    let catalogMain = [...catalog]

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [currentPage])

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
    if (sortCatalogByOption === 'popular') {
        catalogMain.sort((a, b) => {
            return (a.rating - b.rating)
        }).reverse()
    }

    let startPageItem = (currentPage - 1) * pageSize
    let endPageItem = (currentPage * pageSize) - 1

    let totalItemsCount = catalogMain.length
    let catalogItems = catalogMain
        .slice(startPageItem, endPageItem + 1)
        .map(el => <ContentItem key={el.id} el={el} id={el.id} link={el.link} rating={el.rating}
                                title={el.title} price={el.price} steel={el.steel}/>
        )

    return <MainCatalog setCurrentPage={setCurrentPage}
                        forceUpdate={forceUpdate}
                        setSortCatalogByOption={setSortCatalogByOption}
                        totalItemsCount={totalItemsCount}
                        catalogItems={catalogItems}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        sortCatalogByOption={sortCatalogByOption}/>
}

export default MainCatalogContainer;