import React, {Component} from 'react'
import './../App.css';

class Rolls extends Component {
    render() {
       
        return(
            <>
            <ul> 
                { this.props.rollingLog }
            </ul>
            </>
        )
    }
}

export default Rolls