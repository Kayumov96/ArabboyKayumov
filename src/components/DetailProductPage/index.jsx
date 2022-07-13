import React, { Component } from "react";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.state);
    return (
      <div>
        <h1> Detail page</h1>
        {this.props?.map((val) => {
          return console.log(val, "detail");
        })}
      </div>
    );
  }
}

export default DetailPage;
