import React, { Component }from 'react';
import Story from './components/Story'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: "",
      famousPerson: "",
      adjective:"",
      sound:"",
      animal1:"",
      animal2:"",
      paragraph: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    var paragraph = `just waking up in ${this.state.location}, gotta thank ${this.state.famousPerson}
    I don't know, but today seems kinda ${this.state.adjective}. No ${this.state.sound} from the ${this.state.animal1}, no smog, and momma cooked a breakfast with no ${this.state.animal2}`
    this.setState({paragraph: paragraph})
  }

  handleClear = () => {
    console.log("hi!");

    this.setState({paragraph: this.state.paragraph, location:"", famousPerson:"", adjective: "", sound:"", animal1:"", animal2:""})
  }



  render() {
    return (
      <>
	  <div className="flex-container">
	  	<div className="items" >

			<label>Location</label>
			<input
			value={ this.state.location }
			name={ "location" }
			onChange={ this.handleChange }></input>
			</div><div className="items">
			<label>Famous Person</label>
			<input
			value={ this.state.famousPerson }
			name={ "famousPerson" }
			onChange={ this.handleChange }></input>
      </div><div className="items">
				<label>Adjective</label>
			<input
			value={ this.state.adjective }
			name={ "adjective" }
			onChange={ this.handleChange }></input>
			</div><div className="items">
			<label>Sound</label>
			<input
			value={ this.state.sound }
			name={ "sound" }
			onChange={ this.handleChange }></input>
		  </div><div className="items">
			<label>Animal #1</label>
			<input
			value={ this.state.animal1 }
			name={ "animal1" }
			onChange={ this.handleChange }></input>
			</div><div className="items">
			<label>Animal #2</label>
			<input
			value={ this.state.animal2 }
			name={ "animal2" }
			onChange={ this.handleChange }></input>
			</div><div className="items">
			<button type="submit" onClick={this.handleFormSubmit}>Submit</button>
			<button type="clear" onClick={this.handleClear}>Clear</button>
	  </div>
    </div>
	  	<div >
    	<Story paragraph={this.state.paragraph} />
	  	</div>
      </>

    );
  }
}



export default App;
