import React from 'react'

const Bad = (props) => {

    let blahbinator = (i) =>{
        let inputArray = i.split()
        
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
        <h2>Bad Robot</h2>
            {blahbinator (props.userInput)}
        </>
    )
}
export default Bad