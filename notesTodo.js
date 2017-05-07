import React, { Component } from 'react';

export class notesTodo extends Component {
  constructor() {
    super();
    this.state = {
      nums: [1, 2, 3, 4]
    }
  }
  handleClick(e){
    const nums = [1, 2, ...this.state.nums, 6];
    // same as ({ nums: nums })
    this.setState({ nums })
  }
  // rerenders entire template every time state changes
  // render has to return only one JSX component
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.handleClick.bind(this)}>click</button>
        {this.state.nums.map(num => (<h3 key={num}>{num}</h3>))}
      </div>
    );
  }
}
