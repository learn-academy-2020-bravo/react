import React, { Component } from 'react';

class Dice extends Component {
  
  render (){  
    return (
      <React.Fragment>
        <h3>This dice roll: { this.props.currentRoll } </h3>
      </React.Fragment>
    );
  }
}

export default Dice;
