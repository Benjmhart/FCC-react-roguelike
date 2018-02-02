
/*global store*/
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

const mockStore= createStore(reducers);

export const CustomProvider = ({ children }) => {
  return (
    <Provider store={mockStore}>
      {children}
    </Provider>
  );
};