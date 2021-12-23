import React from 'react';
import json from './data.json';

class FilterBeast extends React.Component {
  handleChange = (e) => {
    console.log(e.target.value);
    const selection = e.target.value;
    let updatingbeast;
    console.log(json);
    if (selection === 'one') {
      updatingbeast = json.filter(element => element.horns === 1);
    } else if (selection === 'two') {
      updatingbeast = json.filter(element => element.horns === 2);
    } else if (selection === 'three') {
      updatingbeast = json.filter(element => element.horns === 3);
    } else if (selection === 'one hundred') {
      updatingbeast = json.filter(element => element.horns === 100);
    } else {
      updatingbeast = json;
    }
    this.props.updateBeast(updatingbeast);
  }
  render() {
    return (
      <>
        <div className='App'>
          <form>
            <label>Beast Filter</label>
            <br/>
            <select onChange={this.handleChange}>
              <option value='all'>All Horned Beasts</option>
              <option value='one'>1 Horned Beast</option>
              <option value='two'>2 Horned Beast</option>
              <option value='three'>3 Horned Beast</option>
              <option value='one hundred'>100 Horned Beast</option>
            </select>
          </form>
        </div>
      </>
    );
  }
}


export default FilterBeast;

