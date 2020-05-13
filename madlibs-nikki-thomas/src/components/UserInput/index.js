import React, { Component } from 'react'

class UserInput extends Component {

  render() {
    return (
      <input
        onChange={ this.props.handleChange }
        name = {this.props.fieldName}
      />
    )
  }
}

export default UserInput
