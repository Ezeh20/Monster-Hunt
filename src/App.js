import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      name : "ezeh"
    }
  }
  render(){
    return (
      <div className="App">
        <h1>{ this.state.name }</h1>
        <button onClick={()=> {this.setState({ name : "tayo" })}}>Click me</button>
      </div>
    );
  }
}

export default App;
