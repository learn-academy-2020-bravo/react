import React, { Component } from 'react';
import '../App.css';

class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  };

  render()  {
    return(
      <>
        <p>
          {this.props.previousRolls}
        </p>
      </>
    )
  }

}

export default Log;
