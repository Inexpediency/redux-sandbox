const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1

        case 'DEC':
            return state - 1

        case 'RND':
            return action.payload

        default: 
            return state
    }
}

export default reducer
