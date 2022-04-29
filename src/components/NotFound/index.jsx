import React, { Component, useState } from "react";
import { BackHome, Container } from "./style";
import { useNavigate } from "react-router-dom";

class Notfound extends Component({ history: History }) {
  render() {
    return (
      <Container className="back">
        <h1>OOOPS! Something went wrong (</h1>
        <BackHome onClick={() => history.back("/")}>Back to the Home</BackHome>
      </Container>
    );
  }
}

export default Notfound;
