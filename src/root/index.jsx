import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Error from "../components/NotFound";
// import { MainContext } from "../context";
import { data } from "../mock/mock";

class Root extends Component {
  // static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      data: data,
    };
  }
  render() {
    // const context = this.context;
    console.log(this.state.data, "rootda");
    return (
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map((value) => (
            <Route
              key={value.id}
              path={value.path}
              element={value.element}
              data={this.state.data}
            />
          ))}
          <Route path="/" element={<Navigate to={"/men"} />} />
        </Route>
        <Route exact path="*" element={<Error />} />
      </Routes>
    );
  }
}

export default Root;
