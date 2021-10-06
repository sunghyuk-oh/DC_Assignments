const initialState = {
    allMovies: [],
    isAuth: false,
    cartItems: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DISPLAY':
            return {
                ...state,
                allMovies: action.payload
            } 
        case 'ON_LOGIN':
            return {
                ...state,
                isAuth: true
            }
        case 'ON_LOGOUT':
            return {
                ...state,
                isAuth: false
            }
        case 'ADD_CART':
            return {
                ...state,
                cartItems: state.cartItems.concat(action.payload)
            }
        default:
            return state
    }
}

export default reducer