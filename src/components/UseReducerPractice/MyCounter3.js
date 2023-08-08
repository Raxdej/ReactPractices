import React, { useReducer } from 'react'

const initState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initState
        default:
            return state
    }
}

export default function MyCounter3() {
    const [count, dispatch] = useReducer(reducer, initState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initState)

    return (
        <div>
            <h1> Counter 1: {count} </h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <h1> Counter 2: {countTwo} </h1>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>

    )
}