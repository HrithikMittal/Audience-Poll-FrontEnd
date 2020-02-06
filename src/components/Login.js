import React from "react";
const Login = props => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Registration Number</label>
          <input type="text" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
