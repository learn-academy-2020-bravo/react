import React, { Component } from 'react'

class Logged extends Component {
    render() {
        return (
            <React.Fragment>
                <p>{this.props.log}</p>
            </React.Fragment>
        )
    }
}

export default Logged
