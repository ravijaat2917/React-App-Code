import React, { Component } from "react";

// class Student extends Component{
//     state = {
//         name:"Rahul",
//         age:this.props.age
//     }
//     // We can modify props with the help of state
//     render(){
//         return <h1>Hello {this.state.name} your Age is {this.state.age + 1 }</h1>
//     }
// }

// State inside the constructor...
// class Student extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Rahul",
//       age: this.props.age,
//     };
//   }

//   // We can modify props with the help of state
//   render() {
//     return (
//       <h1>
//         Hello {this.state.name} your Age is {this.state.age + 1}
//       </h1>
//     );
//   }
// }


//  Change state --------------------------------------------------------------------
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rahul",
      age: this.props.age,
    };
  }

  handleClick = () => {
    this.setState(function (state, props) {
        state.name = "Ravi";
      console.log(state , props);
    });
  };

  // We can modify props with the help of state
  render() {
    return (
      <>
        <h1>
          Hello {this.state.name} your Age is {this.state.age + 1}
        </h1>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}


export default Student;
