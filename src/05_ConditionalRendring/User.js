import React, { Component } from 'react';

const ConditionalRendering = (props) => {
    return (
      <>
        <h1>Welcome Ravi</h1>
        <button onClick={props.clickData}>LogOut</button>
      </>
    );
}

export default ConditionalRendering;