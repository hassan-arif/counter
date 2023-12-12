const initialState = {
    counter: 0,
    history: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'CHANGE_BY': // works both for +ive or -ive value
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'STORE':
            return {
                ...state,
                history: state.history.concat(state.counter)
            }
        case 'DELETE':
            let arr = [...state.history]
            arr.splice(action.id, 1)
            return {
                ...state,
                history: arr
            }
        default: return state
    }
}

export default reducer