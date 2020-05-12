import React, { Component } from 'react';
import Good from './components/Good'
import Bad from './components/Bad'
import Kanyebot from './components/Kanyebot'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
	  response: "",
	  badResponse: ""
    }
  }


 handleChange = (e) => {
	this.setState({response: e.target.value, badResponse: e.target.value})
 }

//  handleBlab = (e) => {
// 	this.setState( {badResponse: e.target.value})
//  }
	
  render() {
	return (
		<>
			<h1>Say Somthing</h1>
			<input value = {this.state.response} onChange = {this.handleChange}></input>
			<Good 
				response = {this.state.response}
			/>
			<Bad 
				
				badResponse = {this.state.badResponse}
			 />
			<Kanyebot 
				response = {this.state.response}
			/>
		</>
    )
  }
		 
	

}


  




export default App;
