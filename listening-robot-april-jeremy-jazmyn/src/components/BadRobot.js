import React, { Component } from 'react';

class BadRobot extends Component{

    capitalizer = (userInput) => {
        // a display component can have its own methods that act on the information being passed as props
        return userInput.toUpperCase()
      }

    blaGen = (userInput) => {
        return 
        //check the characters the user inputs and return the same characters from an array x amount of times
        // 3 characters then only 3 characters of BLA would return "B" "L" "A"
        //split strings into array and then map and spit back out the appropriate BLABLA
        // charAt[0] === B 
        // charAt[1] === L
        // if else this.statement if index = %3 === 0
        // return A else if index = %2 === 0 
        // return L
        // else return B
        // if(userInput.indexOf() === %3 === 0)
        
    }
    
      render() {
        return (
          // calling a method and passing the information from the input
             <>I hear you saying, { this.capitalizer(this.props.name) }. Is that correct ? </>
        )
      }
}

export default BadRobot
