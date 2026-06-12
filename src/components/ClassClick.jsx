import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked the button");
  }

  render() {
    <div>
      <button onClick={this.clickHandler}> Click Me </button>
    </div>;
  }
}
