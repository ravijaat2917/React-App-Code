import React, { Component } from 'react'
import InLineStyle from "./Inline_Style";
import ExternalStyleSheet from './ExternalStyleSheet';
import CSS_Module from './CSS_Module_in_ReactJs';

export default class App extends Component {
  render() {
      return (
        <>
          <h1>Welcome This is React with CSS Code Page...</h1>
              {/* <InLineStyle /> */}
              {/* <ExternalStyleSheet/> */}
              <CSS_Module/>
        </>
      );
  }
}
