import React, { Component } from 'react'

class NameInput extends Component {
  // NameInput is a dumb/display component that does not hold state

  handleChange = (event) => {
    // method that takes the value from the input and calls updateName
    this.props.updateName(event.target.value)
  }

  render() {
    // the JSX tag <input /> has the value of name coming as props from App.js
    return (
      <input
        value={ this.props.name }
        onChange={ this.handleChange }
      />
    )
  }
}

export default NameInput