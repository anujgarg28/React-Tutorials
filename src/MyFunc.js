import React, { useEffect, useState } from 'react'

var count = 0;

const MyFunc = (props) => {
    const [counter, setCounter] = useState(0);
    const [myText, setMyText] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
      fetch("https://api.agify.io/?name=anuj")
        .then((res) => res.json())
        .then((response) => setData(response));
    }, []);

    useEffect(() => {
        console.log("use Effect Called");
        setCounter(counter + 1); //it will become infinite
        return () => console.log("unmount the component");
    }, [myText]);

    const handleClick = () => {
        setMyText("hello" +count++);
    }

    return (
        <div>
            <h3> My Functional Component</h3>
            <h4> My Counter is  {counter}</h4>
            <h5> My Text Value is {myText} </h5>
            <h3> My Data is {data.name} {data.count} {data.age} </h3>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default MyFunc;