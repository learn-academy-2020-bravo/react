import React, { Component } from 'react';
import '../App.css';


class Dice extends Component {
  render()  {
    return(
      <>
      <h1 id="Title" > Dice Roller</h1>
        <p>
          <img id="images" src = {this.props.image[this.props.outcome]} onClick = { this.props.roll }/>
        </p>
        <br></br>
        <p id= "Instructions"> Click the Dice to RoLL! </p>
      </>
    )
  }
}

export default Dice;
