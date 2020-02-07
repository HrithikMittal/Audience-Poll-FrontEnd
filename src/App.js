import React, { Component } from "react";

import MainPage from "./components/MainPage";
import Sortable from "./components/Sortable";
import Signup from "./components/Signup";

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
      content = <Signup click={() => this.onLogin()} />;
    }
    if (this.state.login === true) {
      data = <Sortable />;
    }
    return (
      <div>
        {/* {content}
        {data} */}
        <Sortable />
        {/* <Signup /> */}
      </div>
    );
  }
}

export default App;
