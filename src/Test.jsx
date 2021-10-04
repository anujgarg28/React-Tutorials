import React from 'react'

export default class Test extends React.Component {
    constructor() {
        super();
        this.state = { name : ''}
        console.log("Constructor Called");
    }

    getDerivedStateFromProps = (state, props) => {
        return {name: props.name};
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("Get Snapshot", prevProps);
        console.log('Get Snapshot State', prevState);
        return 'hello';
    }

    componentDidUpdate = (prevProps, prevState, data) => {
        //console.log("Update", prevProps);
        //console.log('Update State', prevState);
        //console.log("After update", this.state);
        console.log(data);
        if(prevState.name == 'anuj'){
            this.setState({name: 'sahil'});
        }   
    }

    //fetch some data from API, external source
    componentDidMount = () => {
        console.log("Component Did Mount Called");
        this.setState({
            name: 'Rahul'
        });
    }

    render() {
        console.log("Render Called");
        return(
            <React.Fragment>
                <h2>{this.state.name}</h2>
            </React.Fragment>    
        )
    }
}