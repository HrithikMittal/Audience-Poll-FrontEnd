import React, { Component } from "react";

import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Sortable from "./components/Sortable";

class App extends Component {
  render() {
    return (
      <div>
        <MainPage />
        <Login />
        <Sortable />
      </div>
    );
  }
}

export default App;
