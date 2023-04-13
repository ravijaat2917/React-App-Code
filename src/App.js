// Inbuilt Imports
import React, { Component } from "react";
import Pt from "prop-types";


import Student from "./002prop_Types";
import ChildProps from "./001ChildProps";
import State from "./004state";
import EventHandler from "./003EventHandling";
import Mounting from "./01_Mounting_Components/Mounting";
import Update from "./02_Updating_Components/Updating";
import UnMounted from "./03_UnMounting_Component/Student";
import Hooks from "./04_Hooks/useState";
import Effect from "./04_Hooks/useEffect"
import useCustomCounter from "./04_Hooks/customHook";

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

// --------------------------------------------------------------
// Mounting Component
// const App = () => {
//   return <Mounting name="ravi"/>;
// };

// Updating Component
// const App = () => {
//   return <Update />;
// };

// UnMounting Component
// const App = () => {
//   return <UnMounted />;
// };


// Hooks Code Stuff ----------------------------------------------
// useState Code
// const App = () => {
//   return (
//     <>
//       <Hooks/>
//     </>
//   )
// }

// 2. useEffect Code
// const App = () => {
//   return (
//     <>
//       <h1>UseEffect Code Page...</h1>
//       <Effect />
//     </>
//   );
// };

// 3. useCustom Effect
const App = () => {
  let data = useCustomCounter();
  let data1 = useCustomCounter();
  return (
    <>
      <h1>UseEffect Code Page...</h1>
      <h2>Count : {data1.count}</h2>
      <button type="button" onClick={data1.handleIncrement}>
        Increment
      </button>

      {/* Reuse */}
      <h2>Count : {data.count}</h2>
      <button type="button" onClick={data.handleIncrement}>
        Increment
      </button>

    </>
  );
};


export default App;
