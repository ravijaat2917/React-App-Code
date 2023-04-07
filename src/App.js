import React from "react";
import Student from "./Student";
// import { Component } from "react";

// let element = React.createElement("h1", null, "Hello Students");

// 1. Class Based Component

// class App extends Component {
//   render() {
//     return (
//       // Also use Fragment as imported From react as import {Fragment} from 'react'
//       <React.Fragment>
//         <h1>Hello {this.props.name}</h1>
//         <h1>Hello Students</h1>
//       </React.Fragment>
//     );
//   }
// }


// 2. Function Based Component

// const App = (props) =>{
//     return <h1>Hello {props.name} .</h1>
// }



// ------------------------------------------------------------
// Composing Components...
const App = () =>{
    return (
      <>
        <Student name="Ravi" />
        <Student name="Sumit" />
        <Student name="Sonam" />
      </>
    );
}

export default App;