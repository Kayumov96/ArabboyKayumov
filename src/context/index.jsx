import React, { Component, createContext } from "react";
import { data } from "../mock/mock";

export const MainContext = createContext();

class WrapperContext extends Component {
  render() {
    const { children } = this.props;
    // console.log(children, "child");
    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
  }
}
export default WrapperContext;
