import * as actionTypes from '../actions/actionTypes'
 
export const fetchBooks = (value) => {
    return {
        type: actionTypes.FETCH_BOOKS,
        payload: value
    }
}

export const addCarts = () => {
    return {
        type: actionTypes.ADD_CART
    }
}