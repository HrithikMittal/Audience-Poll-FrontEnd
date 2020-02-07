import React, { Component } from "react";
import axios from "axios";
import { Sortable } from "@progress/kendo-react-sortable";
import SortableItemUI from "./style/SortableItemUI";
import Thankyou from "./Thankyou";
import Image from "../assests/cheers.jpg";

class Sortableclass extends Component {
  state = {
    data: [],
    submit: false,
    finish: false
  };

  onDragOver = event => {
    this.setState({
      data: event.newState
    });
  };

  onNavigate = event => {
    this.setState({
      data: event.newState
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/team/getteams")
      .then(teams => {
        this.setState({ data: teams.data });
      })
      .catch(err => {
        console.log("Error is ", err);
      });
  }

  onSubmission = async () => {
    let response = this.state.data;
    let datatosend = [];
    response.map((eachres, index) => {
      var teamname = eachres.name.toString();
      var obj = {};
      obj[teamname] = response.length - index;
      datatosend.push(obj);
      return null;
    });
    await axios
      .post("http://localhost:8080/team/postranking", datatosend)
      .then((req, res) => {
        console.log({ message: "Done Successfully..." });
        this.setState({ submit: true });
        this.setState({ finish: true });
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  };

  render() {
    let teams = "";
    let thankyou = "";
    if (this.state.submit === false && this.state.finish === false) {
      teams = (
        <div className="container" style={{ padding: "10px 0px" }}>
          <div
            className="jumbotron jumbotron-fluid"
            style={{
              height: "200px",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.7)"
            }}
          >
            <div className="container">
              <h1 className="display-4">Vote For VGT</h1>
              <p className="lead">Drag Your Favourite team to the top.</p>
            </div>
          </div>
          <div>
            <Sortable
              idField={"_id"}
              disabledField={"disabled"}
              data={this.state.data}
              itemUI={SortableItemUI}
              onDragOver={this.onDragOver}
              onNavigate={this.onNavigate}
            />
            <button
              style={{ margin: "10px 0px", width: "100%" }}
              type="submit"
              className="btn btn-warning"
              onClick={() => this.onSubmission()}
            >
              Submit
            </button>
          </div>
        </div>
      );
    } else if (this.state.submit === true && this.state.finish === true) {
      thankyou = <Thankyou />;
    }

    var sectionStyle = {
      backgroundImage: `url(${Image})`,
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "fixed",
      width: "100%",
      backgroundRepeat: "repeat"
    };

    return (
      <div style={sectionStyle}>
        <div classNameName="container-fluid">
          {teams}
          {thankyou}
        </div>
      </div>
    );
  }
}

export default Sortableclass;
