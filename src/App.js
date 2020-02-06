import React, { Component } from "react";

import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Sortable from "./components/Sortable";

class App extends Component {
  state = {
    start: false
  };
  onPressStart = () => {
    this.setState({ start: true });
  };

  render() {
    let content = <MainPage click={() => this.onPressStart()} />;
    if (this.state.start === true) {
      content = <Login />;
    }
    return (
      <div>
        {content}
        <Sortable />
      </div>
    );
  }
}

export default App;
