import React from "react";

const Shoe = (props) => {
    return(
        <React.Fragment>
            <h3> My Shoe is {props.name}</h3>
            <h2> My Shoe Price is {props.price}</h2>
        </React.Fragment>
    )
}

export default Shoe;