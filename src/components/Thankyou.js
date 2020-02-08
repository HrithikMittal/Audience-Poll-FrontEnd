import React from "react";
const Thankyou = props => {
  return (
    <div class="container">
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          margin: "100px 50px",
          height: "200px",
          borderRadius: "10px",
          backgroundColor: "rgba(255,255,255,0.7)"
        }}
      >
        <div className="container">
          <h1 className="display-4">Thank You </h1>
          <p className="lead">Your Poll is submitted.</p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
