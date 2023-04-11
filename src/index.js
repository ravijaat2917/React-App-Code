import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import UnMounted from "./03_UnMounting_Component/Student";

// 1.For Class Based Component
// ReactDom.render(<App/> , document.getElementById("root"));

// 2. For function Based Component includes Props
// ReactDOM.render(<App name="Ravi" />, document.getElementById("root"));

ReactDOM.render(<UnMounted />, document.getElementById("unMount"));
ReactDOM.unmountComponentAtNode(document.getElementById("unMount"));
