import React, { Component } from "react";

export default class Mounting extends Component {
  // 1. Constructor Called Firstly
  constructor(props) {
    super(props);
    console.log("Mounting Constructor Called...");

    console.log(props);

    this.state = {
      roll: 101,
    };
  }

  // 2.Called Secondly -  Return is compulsary
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived State called...");
    console.log(props, state);
    return null;
  }

  // 3. Called thirdly
  componentDidMount() {
    // Get Data from server and set to state
    console.log("Component Did Mount Called...");
  }

  render() {
    console.log("render Method Called...");
    return (
      <div>
        <h1>Hello Geeks {this.state.roll}</h1>
      </div>
    );
  }
}
