import React from 'react'
import Data from './Data.jsx'

//const arr = [ { id: 10, name: 'Anuj'}, {id: 20, name: 'Rahul'}, {id: 30, name:'Mohit'}]
//const heading = "Test React";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: 'Test React',
            name: '',
            arr: [ { id: 10, name: 'Anuj'}, {id: 20, name: 'Rahul'}, {id: 30, name:'Mohit'}]
        }
    }

    getData = () => {
        const oldArr = this.state.arr;
        oldArr.push({id: 40, name: 'Sumit'});
        this.setState({
           heading: 'My Heading is Changed',
           arr: oldArr,
           name: 'Anuj'
        });
    }
    
    changeName = (updatedName) => {
        this.setState({
            name: updatedName
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1> { this.state.heading } </h1>
               {this.state.arr.map((element) => <h4> {element.id} , {element.name }</h4> )}
               <button onClick={this.getData} disabled={this.state.name}>Click Me</button>
               {this.state.name && 
               <Data 
                    name={this.state.name} 
                    city = {'Gurgaon'}
                    phone = {2832832032}
                    change = {this.changeName}
               />}
            </React.Fragment>
        )
    }
}
