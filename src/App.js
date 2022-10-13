import React, { Component } from 'react';
import './App.css';
import Header from './Components/HeaderComponent/header-component';
import CardList from './Components/CardListComponent/cardlist-component';
class App extends Component{
  constructor(){
    super();

    this.state ={
      monsters : []
    }
  }

  // This will return when the page is rendered
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => { this.setState(() => { return({ monsters : users})})})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <CardList monsters = {this.state.monsters}/>
      </div>
    );
  }
}

export default App;
