import React from 'react'
import goodbot from '../images/goodbot.png'


const Good = (props) => {

    return (
        <>
        <div id='goodbot'>
            <img src= {goodbot}/>
            <h2>Goodbot</h2>
                <p>I heard you say {props.userInput}</p>
        </div>
        </>
    )
}
export default Good