import React from "react";

import Image from "../assests/cheers.jpg";

const Thankyou = props => {
  var sectionStyle = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    position: "fixed",
    backgroundRepeat: "repeat"
  };

  return (
    <div class="container" style={{ height: "500px" }}>
      <div
        className="jumbotron jumbotron-fluid"
        style={{
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
