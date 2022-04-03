const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


let initialState = {
    catalog: [
        {id: 1, title: 'Нож Лиса', price: 2700, steel: 'ELMAX', rating: 5},
        {id: 2, title: 'Нож Не Лиса', price: 2700, steel: '95x18', rating: 5},
        {id: 3, title: 'Нож Лиса', price: 2700, steel: '95x18', rating: 5},
        {id: 4, title: 'Нож Волк', price: 2700, steel: '95x18', rating: 5},
        {id: 5, title: 'Нож Волк', price: 2700, steel: '95x18', rating: 5},
    ],
    favorite: [],
    addedItemsToCart: [],
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
                addedItemsToCart: [...state.addedItemsToCart.filter(el => {return el !== action.item})],
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
