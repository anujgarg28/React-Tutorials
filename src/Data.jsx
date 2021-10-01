import React from 'react'

export default class Data extends React.Component {
    render() {
        return(
            <React.Fragment>
                {this.props.name ? <h4>{this.props.name}</h4> : <h4>Blank Name</h4>}
                <h4>{this.props.city}</h4>
                <h3>{this.props.phone}</h3>
            </React.Fragment>
            
        )
    }
}