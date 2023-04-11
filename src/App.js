import React from "react";
import Student from "./prop_Types";
import ChildProps from "./ChildProps";
import State from "./state";
import EventHandler from "./EventHandling";
import Mounting from "./01_Mounting_Components/Mounting";
import Update from "./02_Updating_Components/Updating";

import Pt from "prop-types";

// import { Component } from "react";

// let element = React.createElement("h1", null, "Hello Students");

// ------------------------------------------------------------------
// Components
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
// const App = () =>{
//     return (
//       <>
//         <Student  />
//         <Student name="Sumit" />
//         <Student name="Sonam" />
//       </>
//     );
// }

// -----------------------------------------------------------------------
// Child Props Code
// const App = () =>{
//   return <ChildProps>This text is Children Props Text...</ChildProps>
// }

// ---------------------------------------------------------------------
// State Code
// const App = () =>{
//   return <State age={23}/>
// }

// -------------------------------------------------------------
//event Handler Code
// const App = () => {
//   return <EventHandler name="Hii"/>
// }

// Change State Code
// const App = () => {
//   return <State name="Ravi" age={22}/>
// }

// Mounting Component
// const App = () => {
//   return <Mounting name="ravi"/>;
// };

// Updating Component
const App = () => {
  return <Update />;
};
export default App;
