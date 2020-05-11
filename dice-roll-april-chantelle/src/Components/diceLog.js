import React, { Component } from 'react';

class DiceLog extends Component {
  
  render (){  
    return (
      <React.Fragment>
        <h4>Dice Log: { this.props.rollLog }</h4>
      </React.Fragment>
    );
  }
}

export default DiceLog;
