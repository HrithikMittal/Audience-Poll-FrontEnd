import React, { Component } from "react";
import axios from "axios";
import { Sortable } from "@progress/kendo-react-sortable";
import SortableItemUI from "./style/SortableItemUI";
import Thankyou from "./Thankyou";

class SortableClass extends Component {
  state = {
    data: []
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

  render() {
    return (
      <div className="container-fluid">
        <Sortable
          idField={"_id"}
          disabledField={"disabled"}
          data={this.state.data}
          itemUI={SortableItemUI}
          onDragOver={this.onDragOver}
          onNavigate={this.onNavigate}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Thankyou />
      </div>
    );
  }
}

export default SortableClass;
