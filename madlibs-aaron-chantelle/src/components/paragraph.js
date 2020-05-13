import React, { Component } from 'react'


const Paragraph = (props) => {
        return (
            <div id="para">
              <p>Once upon a time, there was a { props.form.noun }.<br></br> This { props.form.noun } was very {props.form.adj} and loved to play {props.form.sport}.<br></br> When it was {props.form.weather} outside, he would paint his {props.form.number} {props.form.bodyPlural}.<br></br> Every time the mail came, he would {props.form.verb1} outside and {props.form.verb2} open the envelope.<br></br> Then he would {props.form.verb3} the letter.</p>   

            </div>
        )
    }

export default Paragraph

