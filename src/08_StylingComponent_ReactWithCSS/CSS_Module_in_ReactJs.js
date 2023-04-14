import React, { Component } from 'react'
import Styles from './App.module.css';

// It provides helping by not conflict the css properties class names
export default class Styling_Component_ModuleInReactJs extends Component {
  render() {
    return (
      <div>
        <h1 className={Styles.txt}>CSS Module Example...</h1>
      </div>
    )
  }
}
