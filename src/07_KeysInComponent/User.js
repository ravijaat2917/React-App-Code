import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <li>{ this.props.value}</li>
    )
  }
}
