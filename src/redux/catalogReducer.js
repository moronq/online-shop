const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

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

let initialState = {
    catalog: catalog,
    favorite: [],
    addedItemsToCart: [],
    pageSize: 12,
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
        default:
            return state
    }
}

export default catalogReducer

export const addItemToCart = (item) => ({type: ADD_TO_CART, item})
export const removeItemFromCart = (item) => ({type: REMOVE_FROM_CART, item})
export const addItemToFavorite = (id) => {
}
export const removeItemFromFavorite = (id) => {
}


