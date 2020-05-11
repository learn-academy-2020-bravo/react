import React, { Component } from 'react';
import '../App.css';

class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  };

  render() {

    let eachItem = this.props.previousRolls.map(item => {
      return(
        <li>{ item }</li>
      )
    })

    return(
      <>
        <p>
        <button id="clear" onClick = {this.props.clear}> Clear your Rolls!!!!!!!!</button>
          <ul id="list">
          { eachItem }
          </ul>
        </p>
      </>
    )
  }

}

export default Log;
