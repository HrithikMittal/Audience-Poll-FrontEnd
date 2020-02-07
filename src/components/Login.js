import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    regno: "",
    password: "",
    token: "",
    isSigned: false,
    message: ""
  };

  onLogin = () => {
    const data = {
      regno: this.state.regno,
      password: this.state.password
    };
    axios
      .post("https://mighty-plateau-37286.herokuapp.com/user/signin", data)
      .then(response => {
        console.log(response);
        this.setState({ token: response.data.token });
        this.setState({ message: response.data.message });
        if (response.data.message === undefined) {
          this.setState({ isSigned: true });
          this.props.click();
        }
      })
      .catch(err => {
        console.log("Error message is ", err.message);
      });
  };

  render() {
    let form = "";
    if (this.state.isSigned === false) {
      form = (
        <div>
          <div className="form-group">
            <label>Registration Number</label>
            <input
              type="text"
              className="form-control"
              id="regno"
              value={this.state.regno}
              onChange={event => this.setState({ regno: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={this.state.password}
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </div>

          <button onClick={() => this.onLogin()} className="btn btn-primary">
            Submit
          </button>
        </div>
      );
    }
    return (
      <div className="container">
        <h3>{this.state.message}</h3>
        {form}
      </div>
    );
  }
}

export default Login;
