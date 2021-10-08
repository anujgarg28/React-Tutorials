import React from "react";

const Car = (props) => {
    return(
        <React.Fragment>
            <h3> My Car is {props.name}</h3>
            <h4> My Car Year is {props.year}</h4>
            <h2> My Car Price is {props.price}</h2>
        </React.Fragment>
    )
}

export default Car;