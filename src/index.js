import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';


// 1.For Class Based Component
// ReactDom.render(<App/> , document.getElementById("root"));

// 2. For function Based Component includes Props
ReactDom.render(<App name="Ravi" />, document.getElementById("root"));