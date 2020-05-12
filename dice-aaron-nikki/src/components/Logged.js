import React, { Component } from 'react'

class Logged extends Component {
    render() {
        return (
            <React.Fragment>
                <h5 style={{
                     font: 'inherit',
                     cursor: 'pointer',
                     border: '1px solid black',
                     background: 'Yellow',
                     padding: '0.5rem 2rem',
                     margin: '2.5rem',
                     width: 'auto'
                }}>{this.props.log}</h5>
            </React.Fragment>
        )
    }
}

export default Logged
