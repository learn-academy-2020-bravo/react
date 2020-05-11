import React, {Component} from 'react'
import './../App.css';

class Dice extends Component {
    render() {
        return(
            <>
                <div onClick = { this.props.boxClick } class = "dice-box">
                    {this.props.diceCurrentRoll}
                </div>
            </>
        )
    }
}

export default Dice