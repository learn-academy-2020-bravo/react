import React, { Component } from 'react';

class KanyeBot extends Component {

    capitalizer = (userInput) => {
        // a display component can have its own methods that act on the information being passed as props
        return userInput.toUpperCase()
      }
    
      render() {
        return (
          // calling a method and passing the information from the input
             <>I am gonna let you finish but Beyonce is { this.capitalizer(this.props.name)}</>
        )
      }
    
}

export default KanyeBot
