import React, { Component } from 'react';
import './App.css';
import creatureData from './data.js';
import ImageList from './ImageList.js';

class App extends Component {
  state = {
    horns: 'All',
    animalType: 'All',
    sortOption: 'horns'
  };
  
  handleChange = (e) => {
    this.setState({ horns: e.target.value, sortOption: 'horns' });
  };
  handleNumberChange = (e) => {
    this.setState({ animalType: e.target.value, sortOption: 'animalType' });
  };

  render() {
    const filteredImages = creatureData.filter(
      (image) => this.state.horns === 'All' || image.horns === Number(this.state.horns)
    );

    const filteredNumberImages = creatureData.filter(
      (image) => this.state.animalType === 'All' || image.animalType === this.state.animalType
    );

  
console.log(filteredImages)
  return (
    <div className="App">
      <h1>Horned Creatures</h1>
      <h3>(Of a Sort)</h3>
      <p>Sort by number of horns</p>
      <select onChange={this.handleChange}>
        <option value="All">All</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="100">Definitely More Than Three, yikes.</option>
      </select>
      <p>Sort by type of animal</p>
      <select onChange={this.handleNumberChange}>
        <option value="All">All</option>
        <option value="mammal">mammal</option>
        <option value="reptile">reptile</option>
        <option value="abomination">abomination</option>
        <option value="other">other</option>
      </select>
      <ImageList filteredSearch={this.state.sortOption === "horns" ? filteredImages : filteredNumberImages} creatureData={creatureData}/>
    </div>
    );
  }
}

export default App;
