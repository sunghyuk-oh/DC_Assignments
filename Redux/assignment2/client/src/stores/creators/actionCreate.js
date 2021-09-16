import * as actionTypes from '../actions/actionTypes'

// Using the Thunk middleware
export const fetchBooks = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/books')
        .then(response => response.json())
        .then(books => {
            dispatch({ type: actionTypes.FETCH_BOOKS, payload: books })
        })
    }
}

// Using the Thunk middleware
export const fetchCartItems = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/view-cart')
        .then(response => response.json())
        .then(books => {
            dispatch({ type: actionTypes.CART_ITEMS, payload: books })
        })
    }
}