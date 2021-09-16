import * as actionType from '../stores/actions/actionTypes'

const initialState = {
    books: [],
    cartItems: [],
}

const reducer = (state=initialState, action) => {
    switch (action.type) { 
        case actionType.FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case actionType.CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state
    }
}

export default reducer