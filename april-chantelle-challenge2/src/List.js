import React , { Component } from 'react';
import logo from './logo.svg';
import AvengersEndgame from './AvengersEndgame'
import ThorRagnarok from './ThorRagnarok'
import './App.css';

class List extends Component {
  render() {
    return (
      <>
        <ol>
            <li>Avengers Endgame</li>
            <AvengersEndgame />
            <li>Thor Ragnarok</li>
            <ThorRagnarok />
            <li>Iron Man</li>
            <li>Captain Marvel</li>
            <li>Spiderman : Far From Home</li>
        </ol>
      </>
    );
  }
}


export default List;