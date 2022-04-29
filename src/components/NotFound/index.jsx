import React, { Component } from "react";
import { BackHome, Container } from "./style";

class Notfound extends Component {
  render() {
    return (
      <Container className="back">
        <h1>OOOPS! Something went wrong (</h1>
        <BackHome>Back to the Home</BackHome>
      </Container>
    );
  }
}

export default Notfound;
