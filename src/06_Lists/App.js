import React, { Component } from "react";

export default class App extends Component {

  state = {
    users: [
      { id: 101, name: "Ravi", password: "3423ssdf" },
      { id: 102, name: "Sonam", password: "y3t7rd37ey8" },
      { id: 103, name: "Sumit", password: "uy3e73hed" },
    ],
    isloggedin: true,
  };

  render() {
    const arr = [10, 20, 30, 40];
    const newArr = arr.map((value, index) => {
      console.log(value, index + "/");
      return <li>{value * 2}</li>;
    });
      
      const newUser = this.state.users;
    return (
      // 1. First Way to make list of an array
      //   <ul>
      //     <li>{arr[0]*2}</li>
      //     <li>{arr[1]*2}</li>
      //     <li>{arr[2]*2}</li>
      //     <li>{arr[3]*2}</li>
      //   </ul>

      // 2.Second way to make a list of array
      //   <ul>
      //       { newArr}
      //   </ul>

      // 3. Third way to make a list of an array...
    //   <ul>
    //     {arr.map((value) => {
    //       return <li>{value / 2}</li>;
    //     })}
    //   </ul>
        
        // 4. from object array
        <>
        {/* <h1>{this.state.users.map((value)=>value.name)}</h1> */}
        
        {/* Also Add Key unique value for not getting error in console */}
            {newUser.map((value) => <h1 key={value.id}>{value.name} , { value.password}</h1>)}
        </>
    );
  }
}
