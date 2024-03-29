const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === 'ADD'){
        return {
            ...state,
            counter: state.counter + 5
        }
    } else if (action.type === 'SUBTRACT'){
        return {
            ...state,
            counter: state.counter - 5
        }
    }
    return state;
};

export default reducer;