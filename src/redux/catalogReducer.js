const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const SET_SEARCH_CATALOG = 'SET_SEARCH_CATALOG'
const SET_FILTER_PRICE_CATALOG = 'SET_FILTER_PRICE_CATALOG'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'

let names = ['Лиса', 'Заяц', 'Волк', 'Медведь', 'Собака', 'Ёж', 'Убийца', 'Не нож', 'Бобер',]
let steel = ['100Х13М', '95x18', 'ELMAX', 'K340', 'M390']
let catalog = []

for (let i = 1; i < 100; i++) {
    let item = {
        id: i,
        title: `Нож ${names[Math.round(Math.random() * (names.length - 1))]}`,
        price: Math.round(Math.random() * (45 - 12) + 12)*100,
        steel: `${steel[Math.round(Math.random() * (steel.length - 1))]}`,
        rating: Math.round(Math.random() * (5 - 1) + 1),
    }
    catalog.push(item)
}

const maxPriceItem = catalog.length ? catalog.reduce((prev, current) => prev.price > current.price ? prev : current) : {price: 0}
const minPriceItem = catalog.length ? catalog.reduce((prev, current) => prev.price < current.price ? prev : current) : {price: 0}
const MIN_PRICE = minPriceItem.price
const MAX_PRICE = maxPriceItem.price

let initialState = {
    catalog: catalog,
    searchCatalog: catalog,
    filterPriceCatalog: catalog,
    favorite: [],
    addedItemsToCart: [],
    pageSize: 12,
    searchValue:'',
    minInputValue: MIN_PRICE,
    maxInputValue: MAX_PRICE,
    MAX_PRICE: MAX_PRICE,
    MIN_PRICE: MIN_PRICE,
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
            case SET_SEARCH_CATALOG:
                return {
                    ...state,
                    searchCatalog: state.catalog.filter(item=>{
                        return item.title.toLowerCase().includes(state.searchValue.toLowerCase())
                    })
                }
            case SET_FILTER_PRICE_CATALOG:
                return {
                    ...state,
                    filterPriceCatalog: state.catalog.filter(item=>{
                        if(item.price>=state.minInputValue && item.price<=state.maxInputValue){
                            return item
                        }
                    })
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
        default:
            return state
    }
}

export default catalogReducer

export const addItemToCart = (item) => ({type: ADD_TO_CART, item})
export const removeItemFromCart = (item) => ({type: REMOVE_FROM_CART, item})
export const setSearchValue = (text) => ({type: SET_SEARCH_VALUE, text})
export const setSearchCatalog = () => ({type: SET_SEARCH_CATALOG})
export const setMinInputValue = (minValue) => ({type: SET_MIN_VALUE, minValue})
export const setMaxInputValue = (maxValue) => ({type: SET_MAX_VALUE, maxValue})
export const addItemToFavorite = (id) => {
}
export const removeItemFromFavorite = (id) => {
}


