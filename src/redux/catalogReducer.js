let initialState = {
    catalog: [
        {id: 1, title: 'Нож Лиса', price: 2700, steel:'ELMAX', rating: 5, favorite: false},
        {id: 2, title: 'Нож Не Лиса', price: 2700, steel:'95x18', rating: 5, favorite: false},
        {id: 3, title: 'Нож Лиса', price: 2700, steel:'95x18', rating: 5, favorite: false},
        {id: 4, title: 'Нож Волк', price: 2700, steel:'95x18', rating: 5, favorite: false},
    ],
    favorite: [],
}

const catalogReducer = (state = initialState, action) => {
    return state
}

export default catalogReducer