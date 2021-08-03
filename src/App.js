import React, { Component } from 'react';
import './App.css';
import creatureData from './data.js';
import ImageList from './ImageList.js';

class App extends Component {
  state = {
    type: 'All',
  };
  
  handleChange = (e) => {
    this.setState({ type: e.target.value });
  };
  
  render() {
    const filteredImages = creatureData.filter(
      (image) => this.state.type === 'All' || image.type === this.state.type
    );

  return (
    <div className="App">
      <h1>Horned Creatures</h1>
      <h3>(Of a Sort)</h3>
      <p>Sort by number of horns</p>
      <select onChange={this.handleChange}>
        <option value="All">All</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
        <option value="Definitely More Than Three, yikes.">Definitely More Than Three, yikes.</option>
      </select>
      <ImageList filteredSearch={filteredImages} creatureData={creatureData}/>
    </div>
    );
  }
}

export default App;
