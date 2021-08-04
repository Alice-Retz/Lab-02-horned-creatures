import React, { Component } from 'react';

class Dropdown extends Component {
    render() { 
        const { changeEvent, options, label } = this.props;
        return ( 
            <div className="dropdown-container">
                <label>{label}</label>
                <select className="dropdown" onChange={changeEvent}>
                    {options.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
         );
    }
}
 
export default Dropdown;