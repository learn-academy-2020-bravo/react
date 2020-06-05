import React, { Component } from "react"
import './App.css'
import { InputGroup, InputGroupAddon, Input, Jumbotron, Container, Alert, Button, ListGroup, ListGroupItem } from 'reactstrap'

class App extends Component{
  constructor(){
    super()
    this.state = {
      location: "",
      ip: "",
      error: null // If we have an error from the API return it here
    }
  }

  componentDidMount() {
     //find IP address
      let findIP = `https://ipapi.co/ip/`
      fetch(findIP)
      .then((response) => {
        if(response.status !== 200){
          throw({ message: "Could not perform search. Please try again." })
        }
        return response.text()
      })
       .then((payload) => {
         let ip = payload
         this.setState({ ip: ip })
       })
      .catch((error) => this.setState({error}))

      //find location based on IP address.
       let searchUrl = `https://ipapi.co/${this.state.ip}/json/`
       fetch(searchUrl)
       .then((response) => {
         if(response.status !== 200){
           throw({ message: "Could not perform search. Please try again." })
         }
         return response.json()
       })
        .then((payload) => {
         let location = `${payload.city}, ${payload.region}`
         this.setState({ location: location })
       })
       .catch((error) => this.setState({error}))

  }

  render(){
    return(
      <React.Fragment>

        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">IP Address and Location</h1>
              <p className="lead">Find out where you are!</p>
            </Container>
          </Jumbotron>
        </div>

        <div id="error">
          { this.state.error &&
            <Alert color="danger">
              { this.state.error.message }
            </Alert>
          }
        </div>

        <div id="results">
          <p>{this.state.ip}</p>
          <p>{this.state.location}</p>
        </div>

      </React.Fragment>
    )
  }
}
  export default App
