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
   var responseLength = e.target.value.length;
   var remainder = responseLength % 4 // 4 is length of 'blab'
   var division = Math.floor(responseLength/4)
   var badResponse = ''
   for (var i =0; i<division; i++){
     badResponse += 'blab'
   }
   badResponse += 'blab'.slice(0,remainder);
   console.log(badResponse);
   this.setState({response: e.target.value, badResponse: badResponse})
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
