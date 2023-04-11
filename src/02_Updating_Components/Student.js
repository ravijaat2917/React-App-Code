import { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Get Derived State From Props...");
    console.log(nextProps, prevState);
    if (nextProps.roll !== prevState.mroll) {
      return { mroll: nextProps.roll };
    } else return null;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    // Stops rendering when mroll is greater then 6..
    if (this.state.mroll < 107) {
      console.log("ShouldComponentUpdate UpDate...");
      console.log(nextProps, nextState);
      return true;
    }
    console.log(nextProps, nextState);
    return false;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Get Snapshot Before Update : ", prevProps, prevState);
    return 45;
  };

  componentDidUpdate = (prevProps, prevState, Snapshot) => {
    console.log("Student - Component Did Update - It Runs After Update");
    console.log(prevProps, prevState, Snapshot);
  };

  render() {
    console.log("Student Render");
    return (
      <div>
        <h1>Hello {this.state.mroll}</h1>
      </div>
    );
  }
}
export default Student;