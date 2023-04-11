import React, { Component } from "react";

export default class Student extends Component {
  componentDidMount = () => {
    console.log("Student Mounted");
  };
  componentWillUnmount = () => {
    console.log("Student will UnMounted...");
  };

  render() {
    return (
      <div>
        <h1>Hello Student Component</h1>
      </div>
    );
  }
}
