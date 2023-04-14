import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ConditionalRendering from './05_ConditionalRendring/App.js';
import UnMounted from "./03_UnMounting_Component/Student";
import List from "./06_Lists/App.js";
import Keys from './07_KeysInComponent/App.js';

// 1.For Class Based Component
// ReactDom.render(<App/> , document.getElementById("root"));


// 2. For function Based Component includes Props
// ReactDOM.render(<App name="Ravi" />, document.getElementById("root"));


// 3. for mount and Unmount Code rendering...
// ReactDOM.render(<UnMounted />, document.getElementById("unMount"));
// ReactDOM.unmountComponentAtNode(document.getElementById("unMount"));



// 4. Conditional Rendering Code...
// ReactDOM.render(
//   <ConditionalRendering consumer={true} primeMember={true} />,
//   document.getElementById("root")
// );

// 5. List Rendering Code
// ReactDOM.render(<List />, document.getElementById("root"));

// 6. Keys plantation Code
const arr = [10, 20, 30, 40];
ReactDOM.render(<Keys numbers={arr} />, document.getElementById("root"));