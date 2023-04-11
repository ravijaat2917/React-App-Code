import { Component } from "react";
import Student from "./Student";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
        roll: 101,
    };
  }

  ClickHandle=()=>{
    console.log("Button Clicked...");
    this.setState({roll:this.state.roll+1});
  }
  render() {
    console.log("Updating Rendered...");
    return (
      <>
      <Student roll={this.state.roll}/>
        <button onClick={this.ClickHandle}>Change</button>
      </>
    );
  }
}

export default Update;