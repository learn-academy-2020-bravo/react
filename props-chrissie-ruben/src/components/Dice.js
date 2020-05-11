import React, {Component} from 'react'

import './../App.css';

class Dice extends Component {
    render() {
        return(
            <>
                <div >
                <img src = {this.props.pictureOfDiceRoll} onClick = { this.props.boxClick } />
                    {/* {this.props.diceCurrentRoll} */}
                </div>
                <button onClick = { this.props.resetButton }>Clear</button>
            </>
        )
    }
}

export default Dice