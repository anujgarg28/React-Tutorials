import React, { useReducer } from "react";

const initialState = { count : 0, name : 'Anuj', address: {
    houseNo : '',
    city: '',
    state: ''
} };

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT' : 
            return { ...state, count: state.count + 1, 
                address : { ...state.address, city: 'Gurgaon'+state.count} }
        case 'DECREMENT' :
            return { ...state, count: state.count - 1 }
        case 'RESET' :
            return { ...state, count: 0 }
        case 'RANDOM' :
            return { ...state, count : action.value}
        default :
            throw new Error("No Action Found");
    }
}

const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <React.Fragment>
            <h3> Name : {state.name}</h3>
            <h3> City : {state.address.city}</h3>
            <h4> Counter : {state.count}</h4>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Add</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Sub</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
            <button onClick={() => dispatch({type: 'RANDOM', value : 100})}>Random Count</button>
        </React.Fragment>
    )
}

export default Counter2;