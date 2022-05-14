import {CatalogItemType, NavBarType} from "../types/types"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const names: Array<string> = ['Лиса', 'Заяц', 'Волк', 'Медведь', 'Собака', 'Ёж', 'Убийца', 'Не нож', 'Бобер',]
const steel: Array<string> = ['100Х13М', '95x18', 'ELMAX', 'K340', 'M390']
const catalog: Array<CatalogItemType> = []


const navBarItems: Array<NavBarType> = [
    {title: 'Каталог ножей', link: 'maincatalog'},
    {title: 'Клинковое оружие', link: 'bladeweapon'},
    {title: 'Сувенирные изделия', link: 'souvenirs'},
    {title: 'Фонари ARMYTEK', link: 'flashlight'},
    {title: 'Сопуствующие товары', link: 'accessories'},
]

for (let i = 1; i < 100; i++) {
    let item: CatalogItemType = {
        id: i,
        title: `Нож ${names[Math.round(Math.random() * (names.length - 1))]}`,
        price: Math.round(Math.random() * (45 - 12) + 12) * 100,
        steel: `${steel[Math.round(Math.random() * (steel.length - 1))]}`,
        rating: Math.round(Math.random() * (5 - 1) + 1),
        link: `/maincatalog/${i}`
    }
    catalog.push(item)
}

type CheckboxesFilterType = Array<string>

const checkboxesFilter: CheckboxesFilterType = []

for (let i = 0; i < catalog.length; i++) {
    catalog.forEach(el => {
        if (checkboxesFilter.includes(el.steel)) {
        } else {
            checkboxesFilter.push(el.steel)
        }
    })
}

const maxPriceItem = catalog.length
    ? catalog.reduce((prev, current) => prev.price > current.price
        ? prev : current) : {price: 0}
const minPriceItem = catalog.length
    ? catalog.reduce((prev, current) => prev.price < current.price
        ? prev : current) : {price: 0}
const MIN_PRICE = minPriceItem.price
const MAX_PRICE = maxPriceItem.price

const initialState = {
    catalog: catalog,
    addedItemsToCart: [] as Array<CatalogItemType>,
    pageSize: 12,
    searchValue: '',
    minInputValue: MIN_PRICE as number | string,
    maxInputValue: MAX_PRICE as number | string,
    MAX_PRICE: MAX_PRICE as number,
    MIN_PRICE: MIN_PRICE as number,
    checkboxesFilter: checkboxesFilter,
    selectedCheckboxes: [] as Array<string>,
    navBarItems: navBarItems,
}

export type InitialStateType = typeof initialState

export type SetRatingPayloadType = {
    id: number
    rating: number
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CatalogItemType>) => {
            state.addedItemsToCart.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<CatalogItemType>) => {
            let index = state.addedItemsToCart.indexOf(action.payload)
            state.addedItemsToCart.splice(index, 1)
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setMinValue: (state, action: PayloadAction<number | string>) => {
            state.minInputValue = action.payload
        },
        setMaxValue: (state, action: PayloadAction<number | string>) => {
            state.maxInputValue = action.payload
        },
        setSelectedCheckboxes: (state, action: PayloadAction<string>) => {
            state.selectedCheckboxes.push(action.payload)
        },
        removeSelectedCheckboxes: (state, action: PayloadAction<string>) => {
            let index = state.selectedCheckboxes.indexOf(action.payload)
            state.selectedCheckboxes.splice(index, 1)
        },
        setRating: (state, action: PayloadAction<SetRatingPayloadType>) => {
            let ratingIndex = state.catalog.findIndex(el => el.id === action.payload.id)
            state.catalog[ratingIndex].rating = action.payload.rating
        }
    }
})

export default catalogSlice.reducer