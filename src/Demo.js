import React, { useEffect, useState } from 'react'

const Demo = (props) => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    const [values, setValues] = useState({city: '', phone : '324322'});

    //this.state = { counter : 0, name : '', city : '' }
    //this.setState({counter : counter + 1});

    useEffect(() => {
      console.log("Mounts the Component");
      setCounter(counter + 1);
      return () => console.log("Unmounts the Component");
    }, []);

    useEffect(() => {
        return () => console.log("Unmounts the Component with no param");
    });

    return (
        <React.Fragment>
            <h4>{props.compName}</h4>
            <ul>
                <li>{counter}</li>
                <li>{name}</li>
                <li>{values.city}</li>
                <li>{values.phone}</li>
            </ul>
            <h3>{data.count}</h3>
            <button onClick={() => setName('Anuj')}> Update Name </button>
            <button onClick={() => 
                setValues((prevValues) => {
                        return ({...prevValues, city: 'Gurgaon'})
                    })}>Update Values</button>
        </React.Fragment>
    )
}

export default Demo;