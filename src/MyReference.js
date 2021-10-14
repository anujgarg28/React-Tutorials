import React, { useEffect, useRef, useState } from "react"

const MyReference = () => {
    const timeRef = useRef(0);
    const myInput = useRef();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("My Input2", myInput.current);
        myInput.current.focus();
    }, []);

    console.log("My Input", myInput.current);

    const startHandler = () => {
        timeRef.current = setInterval(() => setCount(count => count + 1), 1000);
    }

    const stopHandler = () => {
        clearInterval(timeRef.current);
    }

    return(
        <React.Fragment>
            <h4> Timer : {count} s</h4>
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button> <br/>
            <input type="text" ref={myInput}/>
        </React.Fragment>
        
    )
}

export default MyReference;