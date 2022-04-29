import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Notfound from "../components/NotFound";

class Root extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map((parent) => (
              <Route
                key={parent.id}
                path={parent.path}
                element={parent.element}
              />
            ))}
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    );
  }
}

export default Root;

{
  /* <Router>
  <Routes>
    <Route element={<Navbar />}>
      {navbar.map((parent) => (
        <Route
          key={parent.id}
          path={parent.path}
          element={parent.element}
        />
      ))}
    </Route>
    <Route path="*" element={<Notfound />} />
  </Routes>
</Router> */
}
