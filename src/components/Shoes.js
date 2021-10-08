import Shoe from "./Shoe";
import MyContext from "./MyContext";
import React, { useContext } from "react";

const Shoes = (props) => {
    const myContext = useContext(MyContext);
    return(
        <React.Fragment>
            {Object.keys(myContext.shoes).map((shoeID) => {
                return(
                    <Shoe 
                        key={shoeID}
                        name={myContext.shoes[shoeID].name}
                        price={myContext.shoes[shoeID].price}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default Shoes;