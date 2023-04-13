import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ConditionalRendering from './05_ConditionalRendring/App.js';
import UnMounted from "./03_UnMounting_Component/Student";

// 1.For Class Based Component
// ReactDom.render(<App/> , document.getElementById("root"));


// 2. For function Based Component includes Props
// ReactDOM.render(<App name="Ravi" />, document.getElementById("root"));


// 3. for mount and Unmount Code rendering...
// ReactDOM.render(<UnMounted />, document.getElementById("unMount"));
// ReactDOM.unmountComponentAtNode(document.getElementById("unMount"));



// 4. Conditional Rendering Code...
ReactDOM.render(
  <ConditionalRendering consumer={true} primeMember={true} />,
  document.getElementById("root")
);