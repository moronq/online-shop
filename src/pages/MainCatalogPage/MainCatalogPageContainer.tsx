import React, {useCallback, useEffect, useState} from 'react'
import MainCatalogPage from "./MainCatalogPage"
import {useAppSelector} from "../../hook/hook";
import {
    catalogSearch,
    displayCatalogItems,
    filterByCheckbox,
    filterByPrice,
    sortCatalog
} from "../../utils/utilsCatalog";
import {UseSearch} from "../../hook/UseSearch";

const MainCatalogPageContainer = () => {

    const {
        catalog, pageSize, minInputValue,
        maxInputValue, selectedCheckboxes
    } = useAppSelector(state => state.catalogPage)

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

    const {searchQuery} = UseSearch()

    catalogMain = catalogSearch(catalogMain, searchQuery)

    catalogMain = filterByPrice(minInputValue, maxInputValue, catalogMain)
    catalogMain = filterByCheckbox(selectedCheckboxes, catalogMain)
    sortCatalog(sortCatalogByOption, catalogMain)

    let catalogItems = displayCatalogItems(currentPage, pageSize, catalogMain)

    return <MainCatalogPage setCurrentPage={setCurrentPage}
                            forceUpdate={forceUpdate}
                            setSortCatalogByOption={setSortCatalogByOption}
                            totalItemsCount={catalogMain.length}
                            catalogItems={catalogItems}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            sortCatalogByOption={sortCatalogByOption}/>
}

export default MainCatalogPageContainer;