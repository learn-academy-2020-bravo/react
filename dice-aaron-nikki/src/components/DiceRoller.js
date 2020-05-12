import React, { Component } from 'react'

class DiceRoller extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundImage: "url(" + "https://upload.wikimedia.org/wikipedia/commons/d/d6/Craps.svg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 'auto',
                    height: 'autopx',
                    margin: 'auto',
                    border: '5px solid #ccc',
                    padding: '10rem'
                    
                }}
            >
                <h1 style={{
                   textAlign: 'center',
                   fontSize: '2rem',
        
                    }}>Random dice roll</h1>
                <p style={{
                    color: 'black',
                    
                }}>this is our current roll: { this.props.dice }</p>
            </div>
        )
    }
}

export default DiceRoller