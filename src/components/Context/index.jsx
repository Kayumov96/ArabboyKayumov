import React from "react";

const defaultValue = { priceType: "", cart: {}};
export const MainContext = React.createContext(defaultValue);
export default MainContext;
