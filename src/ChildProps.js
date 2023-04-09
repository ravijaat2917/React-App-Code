import React from "react";
import { Component } from "react";

class ChildProps extends Component {
    render(){
        return <h1>{this.props.children}</h1>
    }
}

export default ChildProps;