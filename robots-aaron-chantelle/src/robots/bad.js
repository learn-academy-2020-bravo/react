import React from 'react'

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
        <h2>Badbot</h2>
        <p>I heard you say {blahbinator (props.userInput)}</p>
        </>
    )
}
export default Bad