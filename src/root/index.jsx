import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Error from "../components/NotFound";
import MainContext from "../components/Context";
import DetailPage from "../components/DetailProductPage";

class Root extends Component {
  state = { cart: [], setCart: this.setCart, priceType: this.priceType };
  setCart = (pro) => {
    return this?.setState((cart) => [...cart, { pro }]);
  };

  render() {
    return (
      <MainContext.Provider value={this?.state}>
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
          <Route path="/details" element={<DetailPage />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </MainContext.Provider>
    );
  }
}

export default Root;
