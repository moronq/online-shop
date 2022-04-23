const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_SELECTED_CHECKBOXES = 'SET_SELECTED_CHECKBOXES'
const REMOVE_SELECTED_CHECKBOXES = 'REMOVE_SELECTED_CHECKBOXES'

const names = ['Лиса', 'Заяц', 'Волк', 'Медведь', 'Собака', 'Ёж', 'Убийца', 'Не нож', 'Бобер',]
const steel = ['100Х13М', '95x18', 'ELMAX', 'K340', 'M390']
const catalog = []

const navBarItems = [
    {title:'Каталог ножей', link:'maincatalog'},
    {title:'Клинковое оружие', link:'bladeweapon'},
    {title:'Сувенирные изделия', link:'souvenirs'},
    {title:'Фонари ARMYTEK', link:'flashlight'},
    {title:'Сопуствующие товары', link:'accessories'},
]

for (let i = 1; i < 100; i++) {
    let item = {
        id: i,
        title: `Нож ${names[Math.round(Math.random() * (names.length - 1))]}`,
        price: Math.round(Math.random() * (45 - 12) + 12) * 100,
        steel: `${steel[Math.round(Math.random() * (steel.length - 1))]}`,
        rating: Math.round(Math.random() * (5 - 1) + 1),
        link: `/maincatalog/${i}`
    }
    catalog.push(item)
}

let checkboxesFilter = []

for (let i = 0; i < catalog.length; i++) {
    catalog.forEach(el => {
        if (checkboxesFilter.includes(el.steel)) {
        } else {
            checkboxesFilter.push(el.steel)
        }
    })
}

const maxPriceItem = catalog.length ? catalog.reduce((prev, current) => prev.price > current.price ? prev : current) : {price: 0}
const minPriceItem = catalog.length ? catalog.reduce((prev, current) => prev.price < current.price ? prev : current) : {price: 0}
const MIN_PRICE = minPriceItem.price
const MAX_PRICE = maxPriceItem.price

let initialState = {
    catalog: catalog,
    favorite: [],
    addedItemsToCart: [],
    pageSize: 12,
    searchValue: '',
    minInputValue: MIN_PRICE,
    maxInputValue: MAX_PRICE,
    MAX_PRICE: MAX_PRICE,
    MIN_PRICE: MIN_PRICE,
    checkboxesFilter: checkboxesFilter,
    selectedCheckboxes: [],
    navBarItems: navBarItems,
}

const catalogReducer = (state = initialState, action) => {

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
        default:
            return state
    }
}

export default catalogReducer

export const addItemToCart = (item) => ({type: ADD_TO_CART, item})
export const removeItemFromCart = (item) => ({type: REMOVE_FROM_CART, item})
export const setSearchValue = (text) => ({type: SET_SEARCH_VALUE, text})
export const setMinInputValue = (minValue) => ({type: SET_MIN_VALUE, minValue})
export const setMaxInputValue = (maxValue) => ({type: SET_MAX_VALUE, maxValue})
export const setSelectedCheckboxes = (checkbox) => ({type: SET_SELECTED_CHECKBOXES, checkbox})
export const removeSelectedCheckboxes = (checkbox) => ({type: REMOVE_SELECTED_CHECKBOXES, checkbox})
export const addItemToFavorite = (id) => {
}
export const removeItemFromFavorite = (id) => {
}

