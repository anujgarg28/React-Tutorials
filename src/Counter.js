import React, { useCallback, useEffect, useState } from 'react'

const funcCounter = new Set();

const Counter = () => {
    const [count, setCount] = useState(0);
    const [myCounter, setMyCounter] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrement = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    const increementMyCounter = useCallback(() => {
        setMyCounter(myCounter + 1);
    }, [myCounter]);

    funcCounter.add(increment);
    funcCounter.add(decrement);
    funcCounter.add(increementMyCounter);

    console.log("SEt Called", funcCounter.size);

    return (
        <React.Fragment>
            <h4>Counter: {count}</h4>
            <h4> My Counter : {myCounter}</h4>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button>
            <button onClick={increementMyCounter}>Add My Counter</button>
        </React.Fragment>
    )
}

export default Counter;