import React, { Component } from "react";

export default class InLineStyle extends Component {
  // render() {
  //   let btnStyle = {
  //     backgroundColor: "blue",
  //     height: 50,
  //     width: 100,
  //   };
  //   let txts = {
  //     fontSize: "40px",
  //   };

  //   return (
  //     <>
  //       <button
  //         style={{
  //           ...btnStyle,
  //           ...txts,
  //           ...{ color: "white" },
  //           ...{ border: "solid 2px orange" },
  //         }}
  //       >
  //         Style
  //       </button>
  //     </>
  //   );
  // }

  state = {
    change: false,
  };

  clickHandle = () => {
    this.setState({ change: true });
  };
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange",
    };

    if (this.state.change) {
      btnStyle.backgroundColor = "white";
    }
    return (
      <>
        <button onClick={this.clickHandle} style={btnStyle}>
          Button
        </button>
      </>
    );
  }
}
