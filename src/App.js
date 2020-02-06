import React, { Component } from "react";

import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Sortable from "./components/Sortable";

class App extends Component {
  state = {
    start: false,
    login: false
  };

  onPressStart = () => {
    this.setState({ start: true });
  };

  onLogin = () => {
    this.setState({ login: true });
  };

  render() {
    let content = <MainPage click={() => this.onPressStart()} />;
    let data = null;
    if (this.state.start === true) {
      content = <Login click={() => this.onLogin()} />;
    }
    if (this.state.login === true) {
      data = <Sortable />;
    }
    return (
      <div>
        {content}
        {data}
      </div>
    );
  }
}

export default App;
