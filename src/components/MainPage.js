import React from "react";
import videoToPlay from "../assests/bgvideo.mp4";

const MainPage = props => {
  return (
    <div>
      <video
        autoPlay
        loop
        playsInline
        autoBuffer
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          left: 0,
          top: 0,
          transition: "opacity, 2s ease-in-out"
        }}
      >
        <source src={videoToPlay} type="video/mp4" />
      </video>
      <div>
        <div
          className=" text-center"
          style={{
            position: "fixed",
            width: "100%",
            textAlign: "center",
            backgroundColor: "transparent",
            color: "white"
          }}
        >
          <div className="card-header">
            <h1>SIAM -VIT</h1>
          </div>
          <div className="card-body" style={{ height: "80%" }}>
            <h1 className="card-title">Vit's Got Talent</h1>
            <p className="card-text">
              You have to Login Before sumitting your poll
            </p>
            <button
              type="submit"
              style={{ margin: "250px 0px", width: "60%" }}
              onClick={props.click}
              className="btn btn-info"
            >
              Login
            </button>
          </div>
          <div
            className="card-footer text-muted"
            style={{
              position: "fixed",
              bottom: 0,
              textAlign: "center",
              width: "100%"
            }}
          >
            <h5
              style={{
                color: "white",
                paddingBottom: "0px",
                textAlign: "center"
              }}
            >
              Made with love by Adhikansh Mittal
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
