import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Error from "../components/NotFound";

class Root extends Component {
  render() {
    return (
      <Routes>
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
