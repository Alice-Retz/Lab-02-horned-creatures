import logo from './logo.svg';
import './App.css';
import images from './data.js';

function App() {
  return() {
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
      <ImageList filteredSearch={filteredData} />
    </div>
  }
}

export default App;
