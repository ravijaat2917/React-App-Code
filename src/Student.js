import React from "react";
import Pt from 'prop-types';

const Student = (props) =>{
    return (
        <>
        <h1>Hello {props.name}</h1>
        </>
    )
}

// Setting the props type a String ....
Student.propTypes = {
    name: Pt.string.isRequired
}
Student.defaultProps = {
    name:"Default"
}

export default Student;