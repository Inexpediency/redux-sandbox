import { createStore } from 'redux'

// reducer
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

// store 
const store = createStore(reducer)

// action creators
const inc = () => ({ type: 'INC' })
const dec =() => ({ type: 'DEC' })
const rnd = (payload) => ({ type: 'RND', payload })

// actions 
document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch(inc())
    })
document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch(dec())
    })
document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10)
        store.dispatch(rnd(payload))
    })

// event listener
const updateCounter = () => {
    document.getElementById('counter').innerHTML = store.getState()
}
store.subscribe(updateCounter)
