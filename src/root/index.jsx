import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Error from "../components/NotFound";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  render() {
    return (
      <Routes>
        <Route>
          {navbar.map(({ path, id, element, hidden }) => {
            return hidden && <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route element={<Navbar />}>
          {navbar.map((value) => (
            <Route key={value.id} path={value.path} element={value.element} />
          ))}
          <Route path="/" element={<Navigate to={"/men"} />} />
        </Route>
        <Route exact path="*" element={<Error />} />
      </Routes>
    );
  }
}

export default Root;
