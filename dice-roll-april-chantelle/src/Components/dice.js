import React, { Component } from 'react';

class Dice extends Component {
  
  render (){  
    return (
      <React.Fragment>
         <img alt="dice face" src= { this.props.currentRoll } />
      </React.Fragment>
    );
  }
}

export default Dice;
