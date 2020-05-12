import React, { Component } from 'react'


const Paragraph = (props) => {
        return (
            <div>
              <p>Once upon a time, there was a { props.noun }. This { props.noun } was very [adjective] and loved to play [sport]. When it was [weather] outside, he would paint his [number] [bodypart-plural]. Every time the mail came, he would [verb] outside and [verb] open the envelope. Then he would [verb] the letter.</p>   
              <p> testing testing { props.noun } </p>
            </div>
        )
    }

export default Paragraph

