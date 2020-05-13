import React, { Component }from 'react';
import Story from './components/Story'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import derek from './img/raplib.png'



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
    I don't know, but today seems kinda ${this.state.adjective}. No ${this.state.sound} from the ${this.state.animal1}, no smog, and momma cooked a breakfast with no ${this.state.animal2}!`
    this.setState({paragraph: paragraph})
  }

  handleClear = () => {
    console.log("hi!");

    this.setState({paragraph:'', location:"", famousPerson:"", adjective: "", sound:"", animal1:"", animal2:""})
  }



  render() {
    return (
      <>
      <div className="container">
        <div className="row justify-content-center text-center" >
          <div className="col">
            <img src={derek} alt={'LOL'} style={{width: "100px"}} />
          </div>
        </div>
        <div className="row justify-content-center" >
          <div className="col text-center">
            <div className="items">
              <label>Location</label>
              <br />
              <input
              value={ this.state.location }
              name={ "location" }
              onChange={ this.handleChange }></input>
            </div>
            <div className="items">
              <label>Person</label>
              <br />

              <input
              value={ this.state.famousPerson }
              name={ "famousPerson" }
              onChange={ this.handleChange }></input>
            </div>
            <div className="items">
              <label>Adjective</label>
              <br />
              <input
              value={ this.state.adjective }
              name={ "adjective" }
              onChange={ this.handleChange }></input>
            </div>
            <div className="items">
              <label>Sound</label>
              <br />
              <input
              value={ this.state.sound }
              name={ "sound" }
              onChange={ this.handleChange }></input>
            </div>
            <div className="items">
            <label>Animal 1</label>
            <br />
              <input
              value={ this.state.animal1 }
              name={ "animal1" }
              onChange={ this.handleChange }></input>
            </div>
            <div className="items">
              <label>Animal 2</label>
              <br />
              <input
              value={ this.state.animal2 }
              name={ "animal2" }
              onChange={ this.handleChange }></input>
            </div>
            <br />
            <div className="items">
              <button type="button" className="btn btn-light" style={{margiRight: '0.8rem' }} onClick={this.handleFormSubmit}>Submit</button>
              <button type="button" className="btn btn-light" style={{marginLeft: '0.8rem' }}onClick={this.handleClear}>Clear</button>
            </div>
          </div>
          <div className="col text-center">
            <div style={{fontFamily: "Fontdiner Swanky", textAlign: 'center', fontSize: '3em'}}>
              Rap Libs
            </div>
            <Story paragraph={this.state.paragraph} />
          </div>
        </div>
      </div>
      </>

    );
  }
}



export default App;
