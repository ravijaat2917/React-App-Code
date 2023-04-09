import React, { Component } from 'react'

class Student extends Component{
    // constructor(props){
    //     this.handleClick = this.handleClick.bind(this) ;
    // }

    handleClick = (e) => {
        // e.preventDefault();
        console.log("Button Clicked" , this.props.name);
    }
    render(){
        return(
            <>
            <h1>Event Text</h1>
            <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}

export default Student;