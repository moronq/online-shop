const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_SELECTED_CHECKBOXES = 'SET_SELECTED_CHECKBOXES'
const REMOVE_SELECTED_CHECKBOXES = 'REMOVE_SELECTED_CHECKBOXES'
const SET_RATING = 'SET_RATING'


const names: Array<string> = ['Лиса', 'Заяц', 'Волк', 'Медведь', 'Собака', 'Ёж', 'Убийца', 'Не нож', 'Бобер',]
const steel: Array<string> = ['100Х13М', '95x18', 'ELMAX', 'K340', 'M390']
const catalog: Array<CatalogItemType> = []

type NavBarType = {
    title: string
    link: string
}

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

let checkboxesFilter: CheckboxesFilterType = []

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

let initialState = {
    catalog: catalog,
    addedItemsToCart: [] as Array<CatalogItemType>,
    pageSize: 12,
    searchValue: '',
    minInputValue: typeof MIN_PRICE,
    maxInputValue: typeof MAX_PRICE,
    MAX_PRICE: typeof MAX_PRICE,
    MIN_PRICE: typeof MIN_PRICE,
    checkboxesFilter: checkboxesFilter,
    selectedCheckboxes: [] as Array<string>,
    navBarItems: navBarItems,
}

export type InitialStateType = typeof initialState

const catalogReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addedItemsToCart: [...state.addedItemsToCart, action.item],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                addedItemsToCart: [...state.addedItemsToCart.filter(el => {
                    return el !== action.item
                })],
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.text
            }
        case SET_MIN_VALUE:
            return {
                ...state,
                minInputValue: action.minValue
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                maxInputValue: action.maxValue
            }
        case SET_SELECTED_CHECKBOXES:
            return {
                ...state,
                selectedCheckboxes: [...state.selectedCheckboxes, action.checkbox]
            }
        case REMOVE_SELECTED_CHECKBOXES:
            let index = state.selectedCheckboxes.indexOf(action.checkbox)
            state.selectedCheckboxes.splice(index, 1)
            return {
                ...state,
                selectedCheckboxes: state.selectedCheckboxes
            }
        case SET_RATING:
            let ratingIndex = state.catalog.findIndex(el => el.id === parseInt(action.id))
            state.catalog[ratingIndex].rating = action.rating
            return {
                ...state,
                catalog: [...state.catalog]
            }
        default:
            return state
    }
}

export default catalogReducer

type SetRatingType = {
    type: typeof SET_RATING
    id: number
    rating: number
}
export const setRating = (id:number, rating:number): SetRatingType => ({type: SET_RATING, id, rating})

type AddItemToCart ={
    type: typeof ADD_TO_CART
    item: CatalogItemType
}
export const addItemToCart = (item: CatalogItemType): AddItemToCart => ({type: ADD_TO_CART, item})

type RemoveItemFromCartType = {
    type: typeof REMOVE_FROM_CART
    item: CatalogItemType
}
export const removeItemFromCart = (item: CatalogItemType): RemoveItemFromCartType => ({type: REMOVE_FROM_CART, item})

type SetSearchValueType = {
    type: typeof SET_SEARCH_VALUE
    text: string
}
export const setSearchValue = (text: string): SetSearchValueType => ({type: SET_SEARCH_VALUE, text})

type SetMinInputValueType = {
    type: typeof SET_MIN_VALUE
    minValue: number
}
export const setMinInputValue = (minValue: number): SetMinInputValueType => ({type: SET_MIN_VALUE, minValue})

type SetMaxInputValueType = {
    type: typeof SET_MAX_VALUE
    maxValue: number
}
export const setMaxInputValue = (maxValue: number): SetMaxInputValueType => ({type: SET_MAX_VALUE, maxValue})

type SetSelectedCheckboxesType = {
    type: typeof SET_SELECTED_CHECKBOXES,
    checkbox: string
}
export const setSelectedCheckboxes = (checkbox: string): SetSelectedCheckboxesType => (
    {type: SET_SELECTED_CHECKBOXES, checkbox})

type RemoveSelectedCheckboxesType = {
    type: typeof REMOVE_SELECTED_CHECKBOXES
    checkbox: string
}
export const removeSelectedCheckboxes = (checkbox: string): RemoveSelectedCheckboxesType => (
    {type: REMOVE_SELECTED_CHECKBOXES, checkbox})


export type CatalogItemType = {
    id: number
    title: string
    price: number
    steel: string
    rating: number
    link: string
}


