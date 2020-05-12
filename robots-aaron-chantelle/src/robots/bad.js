import React from 'react'
import badbot from '../images/badbot.png'


const Bad = (props) => {

    let blahbinator = (userInput) =>{
        let inputArray = userInput.split("")
        console.log(inputArray)
        
        let blaArray = inputArray.map((value, index) => {
            if(index%3 === 0){
                return value = "B"
            } 
            else if (index%3 === 1){
                return value = "L"
            }
            else {
                return value = "A"
            }
        })
        return blaArray.join("")
    }

    return (
        <>
        <div id='badbot'>
            <img src= {badbot}/>
            <h2>Badbot</h2>
            <p>I heard you say {blahbinator (props.userInput)}</p>
        </div>
        </>
    )
}
export default Bad