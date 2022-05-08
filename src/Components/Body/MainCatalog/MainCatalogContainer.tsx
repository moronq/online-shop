import React, {useCallback, useEffect, useState} from 'react';
import ContentItem from "../common/ContentItem/ContentItem";
import {useSelector} from "react-redux";
import MainCatalog from "./MainCatalog";
import {setRating} from "../../../redux/catalogReducer";
import {AppStateType} from "../../../redux/store";


const MainCatalogContainer = () => {

    const catalog = useSelector((state:AppStateType) => state.catalogPage.catalog)
    const pageSize = useSelector((state:AppStateType) => state.catalogPage.pageSize)
    const minInputValue = useSelector((state:AppStateType) => state.catalogPage.minInputValue)
    const maxInputValue = useSelector((state:AppStateType) => state.catalogPage.maxInputValue)
    const searchValue = useSelector((state:AppStateType) => state.catalogPage.searchValue)
    const selectedCheckboxes = useSelector((state:AppStateType) => state.catalogPage.selectedCheckboxes)

    let [currentPage, setCurrentPage] = useState(1)

    const [, updateState] = useState()
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
            if (item.price >= parseInt(minInputValue) && item.price <= parseInt(maxInputValue)) {
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
                                setRating = {setRating}
                                forceUpdate={forceUpdate}
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