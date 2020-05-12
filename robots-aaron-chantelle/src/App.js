import React, {Component} from 'react';
import Good from './robots/good'
import Bad from './robots/bad'
import Other from './robots/other'
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

    render(){
      return (
        <div>
          <h1>Robot Say, Robot Do</h1>
          <input
            value = { this.state.userInput}
            onChange = {this.handleChange}
          />
          <Good userInput= {this.state.userInput} />
          <Bad userInput= {this.state.userInput}/>
          <Other userInput= {this.state.userInput}/>
        </div>
      )
    }
}
export default App;
