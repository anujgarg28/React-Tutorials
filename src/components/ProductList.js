import React from "react";
import Cars from "./Cars";
import Shoes from "./Shoes";

const ProductList = (props) => {
    return(
        <React.Fragment>
            <Cars/>
            <hr/>
            <Shoes/>
        </React.Fragment>
    )
}

export default ProductList;