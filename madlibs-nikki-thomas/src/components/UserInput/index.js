import React, { Component } from 'react'

class UserInput extends Component {

  handleChange = (event) => {
    this.props.updateName(event.target.value)
  }

  render() {
    return (
      <input
        value={ this.props.name }
        onChange={ this.handleChange }
      />
    )
  }
}

export default UserInput