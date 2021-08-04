import React, { Component } from 'react';
import './App.css';
import creatureData from './data.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

class App extends Component {
  state = {
    horns: 'All',
    animalType: 'All',
    // sortOption: 'horns' <- yesterday's code
  };

  options = ['All', 1, 2, 3, 100];
  animalTypeOptions = ['All', 'mammal', 'reptile', 'abomination', 'other'];
  
  handleChange = (e) => {
    this.setState({ horns: e.target.value });
  };
  handleNumberChange = (e) => {
    this.setState({ animalType: e.target.value });
  };

  render() {


    const filteredNumberImages = creatureData.filter(
      (image) => (this.state.animalType === 'All' || image.animalType === this.state.animalType)
        && (this.state.horns === 'All' || image.horns === Number(this.state.horns))
    );


  return (
    <div className="App">
      <h1>Horned Creatures</h1>
      <h3>(Of a Sort)</h3>
      <p>Sort by number of horns</p>
      <Dropdown
        options={this.options}
        changeEvent={this.handleChange}
      />

      <p>Sort by type of animal</p>
      <Dropdown
        label="animalType"
        options={this.animalTypeOptions}
        changeEvent={this.handleNumberChange}
      />
      
      <ImageList 
        // filteredSearch={this.state.sortOption === "horns" ? filteredImages : filteredNumberImages} creatureData={creatureData}/>
        creatureData={filteredNumberImages}/>
        </div>
    );
  }
}

export default App;
