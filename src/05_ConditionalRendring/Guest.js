import React, { Component } from "react";

const Guest = (props) => {
  return (
    <>
      <h1>Welcome Guest</h1>
      <button onClick={props.clickData} >Login</button>
      <button>SignUp</button>
    </>
  );
};

export default Guest;
