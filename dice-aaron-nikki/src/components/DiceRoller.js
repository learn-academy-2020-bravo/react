import React, { Component } from 'react'

class DiceRoller extends Component {
    render() {
        return (
            <>
                <h3>Random dice roll</h3>
                <p>this is our current roll: { this.props.dice }</p>
            </>
        )
    }
}

export default DiceRoller