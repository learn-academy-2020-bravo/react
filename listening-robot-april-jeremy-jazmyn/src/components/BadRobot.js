import React, { Component } from 'react';

class BadRobot extends Component{

    capitalizer = (userInput) => {
        // a display component can have its own methods that act on the information being passed as props
        return userInput.toUpperCase()
      }

    // blaGen = (userInput) => {
    //     let strArray = userInput.split("")
    //     let blaWord = []
    //     strArray.map((letter, index) => {
    //       if (index === 0) return blaWord.push("B")
    //       else if (blaWord[index-1] === "B") return blaWord.push("L")
    //       else if (blaWord[index-1] === "L") return blaWord.push("A")
    //       else if (blaWord[index-1] === "A") return blaWord.push("B")
    //       else return "Error"
    //     })
    //     return blaWord.join("")
    // }

    blaGen = (string) => {
        return string.split("").map((value,index) => {
            if(index %3 === 0){
                return "B"
            } else if(index %3 === 1){
                return "L"
            } else {
                return "A"
            }
        })
    }
    
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
        
    
      render() {
        return (
          // calling a method and passing the information from the input
             <>I hear you saying, { this.blaGen(this.props.name) }. Is that correct ? </>
        )
      }
    }

export default BadRobot
