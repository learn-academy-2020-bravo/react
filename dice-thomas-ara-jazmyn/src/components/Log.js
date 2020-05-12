import React, { Component } from 'react';
import '../App.css';

class Log extends Component {
  render() {

    //each item in our array gets wrapped in a list tag.
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
