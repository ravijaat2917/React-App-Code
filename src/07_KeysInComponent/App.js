import React, { Component } from 'react';
import User from './User';

export default class App extends Component {
  render() {
    const arr = this.props.numbers;
    const newArr = arr.map((num, i) => {
      // Key was not send as props
      return <User value={num} key={i}></User>
    })
    return (
      <div>
        <h1>Keys Example Code...</h1>
        <ul>{newArr}</ul>
      </div>
    )
  }
}
