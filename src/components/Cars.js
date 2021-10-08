import React, { useContext } from "react";
import Car from "./Car";
import MyContext from "./MyContext";

const Cars = (props) => {
    const myContext = useContext(MyContext);
    return(
        <React.Fragment>
            {Object.keys(myContext.cars).map((carID) => {
                return(
                    <Car 
                        key={carID}
                        name={myContext.cars[carID].name}
                        year={myContext.cars[carID].year}
                        price={myContext.cars[carID].price}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default Cars;