import React, {Component} from 'react';
import Good from './robots/good'
import Bad from './robots/bad'
import Trump from './robots/trump'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput:""
    }
  }

  handleChange = (event) =>{
    this.setState({ userInput : event.target.value})
  }

  clearInput = () =>{
    this.setState({ userInput : ""})
  }


    render(){
      return (
        <div>
          <h1>Robot Say, Robot Do</h1>
          <div id='input'>
            <input
            value = { this.state.userInput}
            onChange = {this.handleChange}
            />
          </div>
          <div id='button'>
            <button onClick= {this.clearInput}>Clear</button>
          </div>
          <div id='bots'>
            <Good userInput= {this.state.userInput} />
            <Bad userInput= {this.state.userInput}/>
            <Trump userInput= {this.state.userInput}/>
          </div>
        </div>
      )
    }
}
export default App;
