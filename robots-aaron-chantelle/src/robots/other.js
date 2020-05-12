import React from 'react'

const Other = (props) => {

    let trumpinator = (userInput) =>{
        let inputArray = userInput.split("")
        console.log(inputArray)
        
        let blaArray = inputArray.map((value, index) => {
            if(index === 0){
                return value = "I "
            } 
            else if (index === 1){
                return value = "believe "
            }
            else if (index === 2){
                return value = "this "
            }
            else if (index === 3){
                return value = "is "
            }
            else if (index === 4){
                return value = "the "
            }
            else if (index === 5){
                return value = "greatest "
            }
            else if (index === 6){
                return value = "app "
            }
            else if (index === 7){
                return value = "in "
            }
            else if (index === 8){
                return value = "the "
            }
            else if (index === 9){
                return value = "history "
            }
            else if (index === 10){
                return value = "of "
            }
            else if (index === 11){
                return value = "America. "
            }
            else if (index === 12){
                return value = "It's "
            }
            else if (index === 13){
                return value = "beautiful, "
            }
            else if (index === 14){
                return value = "majorly "
            }
            else if (index === 15){
                return value = "beautiful. "
            }
            else if (index === 16){
                return value = "We "
            }
            else if (index === 17){
                return value = "need "
            }
            else if (index === 18){
                return value = "to "
            }
            else if (index === 19){
                return value = "totally "
            }
            else if (index === 20){
                return value = "make "
            }
            else if (index === 21){
                return value = "America "
            }
            else if (index === 22){
                return value = "as "
            }
            else if (index === 23){
                return value = "great "
            }
            else if (index === 24){
                return value = "as "
            }
            else if (index === 25){
                return value = "this "
            }
            else if (index === 26){
                return value = "app. "
            }
            else if (index === 27){
                return value = "Honestly, "
            }
            else if (index === 28){
                return value = "all "
            }
            else if (index === 29){
                return value = "other "
            }
            else if (index === 30){
                return value = "apps "
            }
            else if (index === 31){
                return value = "are "
            }
            else if (index === 32){
                return value = "a "
            }
            else if (index === 33){
                return value = "complete "
            }
            else if (index === 34){
                return value = "and "
            }
            else if (index === 35){
                return value = "total "
            }
            else if (index === 36){
                return value = "joke. "
            }
            else {
                return value = "BUILD A WALL "
            }
        })
        return blaArray.join("")
    }

    return (
        <>
        <h2>Trumpbot</h2>
        <p>I heard you say {trumpinator (props.userInput)}</p>
        </>
    )
}
export default Other