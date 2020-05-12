import React, { Component } from 'react';

class GoodRobot extends Component {
    
    capitalizer = (userInput) => {
        // a display component can have its own methods that act on the information being passed as props
        return userInput.toUpperCase()
      }
    
      render() {
        return (
          // calling a method and passing the information from the input
             <>I hear you saying, { this.capitalizer(this.props.name)}. Is that correct ? </>
        )
      }

}
export default GoodRobot
