import React, { Component } from "react";
import axios from "axios";
import { Sortable } from "@progress/kendo-react-sortable";
import SortableItemUI from "./style/SortableItemUI";
import Thankyou from "./Thankyou";

class SortableClass extends Component {
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

  onSubmission = () => {
    this.setState({ submit: true });
    this.setState({ finish: true });
    console.log(this.state.data);
  };

  render() {
    let teams = "";
    let thankyou = "";
    if (this.state.submit === false && this.state.finish === false) {
      teams = (
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
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmission.bind(this)}
          >
            Submit
          </button>
        </div>
      );
    } else if (this.state.submit === true && this.state.finish === true) {
      thankyou = <Thankyou />;
    }
    return (
      <div className="container-fluid">
        {teams}
        {thankyou}
      </div>
    );
  }
}

export default SortableClass;
