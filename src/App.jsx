import React from 'react'

const arr = [ { id: 10, name: 'Anuj'}, {id: 20, name: 'Rahul'}, {id: 30, name:'Mohit'}]
const heading = "Test React";

export default class App extends React.Component {
    constructor() {
        super();
        //this.getData = this.getData.bind(this);
    }

    getData = () => {
        console.log("Button Clicked");
        console.log(this); 
    }

    render() {
        return (
            <React.Fragment>
                <h1> { heading } </h1>
               { arr.map((element) => <h4> {element.id} , {element.name }</h4> )}
                <button onClick={this.getData}>Click Me</button>
            </React.Fragment>
        )
    }
}
