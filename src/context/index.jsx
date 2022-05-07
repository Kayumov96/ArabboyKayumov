import React, { Component, createContext } from "react";
import { data } from "../mock/mock";

export const MainContext = createContext();

class WrapperContext extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <MainContext.Provider value={data}>{children}</MainContext.Provider>
      </div>
    );
  }
}
export default WrapperContext;
