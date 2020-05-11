import React, {Component} from 'react'

class Rolls extends Component {
    render() {
        // let eachItem = this.props.rollingLog.map(value => {
        //     return (<li> {value} </li>)
        // })
   
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