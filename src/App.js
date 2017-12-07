import React, { Component } from 'react';
import './App.css';
import TeamGridComponent from './components/TeamGridComponent';

class App extends Component {
  componentDidMount(){
    alert('test');
  }
  render() {
    return (
      <TeamGridComponent/>
    );
  }
}

export default App;
