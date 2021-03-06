const initialState = {
    counter: 99
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1}
        case 'DECREMENT':
            return { counter: state.counter - 1}
        case 'ADD':
            return { counter: state.counter + action.payload }
        case 'SUBTRACT':
            return { counter: state.counter - action.payload}
    }

    return state
}

export default reducer