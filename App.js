import React, { Component } from "react";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./src/reducers";

import AppNavigation from './src/appNavigation/router'

// import Home from "./screens/Home";

let store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
