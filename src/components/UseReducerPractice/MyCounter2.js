import React, {useReducer} from 'react'

const initState = {
    counterA: 0,
    counterB: 15
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return {...state, counterA: state.counterA + action.value}
        case 'decrement':
            return {...state, counterA: state.counterA - action.value}
        case 'incrementB':
            return {...state, counterB: state.counterB + action.value}
        case 'decrementB':
            return {...state, counterB: state.counterB - action.value}
        case 'reset':
            return initState
        default:
            return state
    }
}

export default function MyCounter2() {
    const [count, dispatch] = useReducer(reducer, initState)


    return(
        <div>
            <h1> Counter A: {count.counterA} </h1>
            <h2> Counter B: {count.counterB} </h2>
            <button onClick={()=> dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <div>
            <button onClick={()=> dispatch({type: 'incrementB', value: 5})}>Increment Counter B</button>
            <button onClick={()=> dispatch({type: 'decrementB', value: 5})}>Decrement Counter B</button>
            </div>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}