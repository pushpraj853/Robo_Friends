import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ;
    })
    return (
      <div className = 'tc'>
        <h1 className= 'f1'>RoboFriends</h1>
        <Searchbox SearchChange={this.onSearchChange}/>
        <Scroll>
           <CardList robots={filteredRobots}/>
        </Scroll>  
      </div> 
    );
  }
}

export default App;
