import React, { Component } from 'react';
import '../App.css';

class Dice extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  };


  render()  {
    return(
      <>
        <p>
          <button onClick = { this.props.roll }> Roll the Dice </button>
          { this.props.outcome }
        </p>
      </>
    )
  }

}

export default Dice;
