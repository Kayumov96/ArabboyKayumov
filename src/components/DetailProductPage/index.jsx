import React, { Component } from "react";
import { data } from "../../mock/mock";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.queryParams = new URLSearchParams(window.location.search);
    this.state = {id:this.queryParams.get("id")};

  };
  getProduct() {
    for (let i in data) {
      if (data[i].id == this.state.id) {
        return data[i];
      }
    }

    return 0;
  }

  render() {
    return (
      <div>
        <h1> Detail page </h1>
        {this.getProduct().category} <br />
        {this.getProduct().color} <br />
        {this.getProduct().description} <br />
        {this.getProduct().price} <br />
      </div>
    );
  }
}

export default DetailPage;
