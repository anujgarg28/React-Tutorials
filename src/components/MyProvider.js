import React from 'react'
import MyContext from './MyContext';

export default class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: {
                car00 : {name: 'Honda', year: '2016', price : '100$'},
                car01 : {name: 'Audi', year: '2018', price : '200$'},
                car02 : {name: 'Mercedes', year: '2019', price : '300$'}
            },
            shoes : {
                shoe01 : {name: 'Adidas', price:'500Rs'},
                shoe02 : {name: 'Nike', price:'1500Rs'},
                shoe03 : {name: 'Bata', price:'2000Rs'}
            }
        }
    }   

    render() {
        return(
            <MyContext.Provider value={{
                cars: this.state.cars,
                shoes: this.state.shoes,
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}