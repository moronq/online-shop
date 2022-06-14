import {CatalogItemType} from "../types/types";
import ContentItem from "../common/ContentItem/ContentItem";
import React from "react";

export function sortCatalog(sortCatalogByOption: string, catalogMain: Array<CatalogItemType>) {
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
}

export function filterByPrice(minInputValue: number | string,
                              maxInputValue: number | string,
                              catalogMain: Array<CatalogItemType>): Array<CatalogItemType> {
    if (minInputValue || maxInputValue) {
        return catalogMain.filter(item => {
            if (item.price >= minInputValue && item.price <= maxInputValue) {
                return item
            }
        })
    } else {
        return catalogMain
    }
}

export function filterByCheckbox(selectedCheckboxes: Array<string>, catalogMain: Array<CatalogItemType>): Array<CatalogItemType> {
    if (selectedCheckboxes.length > 0) {
        return catalogMain.filter((el) => {
            return (
                selectedCheckboxes.includes(el.steel)
            )
        })
    } else {
        return catalogMain
    }
}

export function displayCatalogItems(currentPage: number,
                                    pageSize: number,
                                    catalogMain: Array<CatalogItemType>): Array<React.ReactNode> {
    let startPageItem = (currentPage - 1) * pageSize
    let endPageItem = (currentPage * pageSize) - 1

    return catalogMain
        .slice(startPageItem, endPageItem + 1)
        .map(el => <ContentItem key={el.id} el={el} id={el.id} link={el.link} rating={el.rating}
                                title={el.title} price={el.price} steel={el.steel}/>
        )
}

export function catalogSearch(catalogMain: Array<CatalogItemType>, searchQuery: string | null){
    return catalogMain.filter(item => {
        return item.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
    })

}