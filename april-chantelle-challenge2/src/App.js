import React , { Component } from 'react';
import logo from './logo.svg';
import List from './List'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <h1>Our Top 5 Marvel Movies</h1>
      <List />
      </>
    );
  }
}


export default App;