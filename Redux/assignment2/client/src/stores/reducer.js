import * as actionType from '../stores/actions/actionTypes'

const initialState = {
    books: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) { 
        case actionType.FETCH_BOOKS:
            return {
                books: state.books.concat(action.payload)
            }
        default:
            return state
    }
}

export default reducer